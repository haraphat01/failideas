// app/api/contact/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message, businessLink } = await req.json();

  try {
    await resend.emails.send({
      from: 'support@failideas.com', // replace with your email
      to: 'haraphat01@gmail.com', // replace with the recipient email
      subject: `New Business Inquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Link:</strong> ${businessLink}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ status: 'success' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ status: 'error' }), {
      status: 500,
    });
  }
}
