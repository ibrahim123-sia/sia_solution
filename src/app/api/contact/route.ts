import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/content/site';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, business, service, message, honeypot } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!resend) {
      console.error('[Contact API] RESEND_API_KEY is not set — submission was not delivered.');
      return NextResponse.json(
        { error: 'An error occurred while sending your message. Please try WhatsApp directly.' },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toISOString();
    const fromAddress = process.env.CONTACT_FROM_EMAIL || 'SIA Technologies <onboarding@resend.dev>';
    const toAddress = process.env.CONTACT_TO_EMAIL || siteConfig.email;

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `New inquiry from ${name}${service ? ` — ${service}` : ''}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business || 'Not specified'}`,
        `Service: ${service || 'General inquiry'}`,
        `Submitted: ${submittedAt}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('[Contact API] Resend error', error);
      return NextResponse.json(
        { error: 'An error occurred while sending your message. Please try WhatsApp directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received. We will respond within 4 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { error: 'An error occurred while sending your message. Please try WhatsApp directly.' },
      { status: 500 }
    );
  }
}
