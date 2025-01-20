import { NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_S7FEWNMv_PhWAiEVyqVF48VPRHodSaKEt';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log('Received request body:', body); // Add this line for debugging

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Portfolio <yourportfolio@domain.dev>',
        to: ['joelsngzw@gmail.com'],
        subject: `New Message from ${body.firstname} ${body.lastname}`,
        html: `
          <h1>New Message Received</h1>
          <p><strong>Name:</strong> ${body.firstname} ${body.lastname}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          <p><strong>Message:</strong> ${body.message}</p>
        `,
      }),
    });

    console.log('Resend API response:', res.status, await res.text()); // Add this line for debugging

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: 'Failed to send email' }, { status: res.status });
    }
  } catch (error) {
    console.error('Error in /api/send:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

