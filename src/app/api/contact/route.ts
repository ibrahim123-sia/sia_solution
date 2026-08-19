import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/content/site';

const transporter =
  process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      })
    : null;

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

    if (!transporter) {
      console.error('[Contact API] GMAIL_USER / GMAIL_APP_PASSWORD is not set — submission was not delivered.');
      return NextResponse.json(
        { error: 'An error occurred while sending your message. Please try WhatsApp directly.' },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toISOString();
    const toAddress = process.env.CONTACT_TO_EMAIL || siteConfig.email;

    try {
      await transporter.sendMail({
        from: `SIA Technologies <${process.env.GMAIL_USER}>`,
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
    } catch (sendError) {
      console.error('[Contact API] Gmail SMTP error', sendError);
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
