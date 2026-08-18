import { NextResponse } from 'next/server';

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

    // In production, this can forward to Resend, SendGrid, EmailJS, or Slack Webhook
    // For logging & structured response:
    console.log('[Contact Form Submission]', {
      name,
      email,
      business: business || 'Not specified',
      service: service || 'General inquiry',
      message,
      timestamp: new Date().toISOString(),
    });

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
