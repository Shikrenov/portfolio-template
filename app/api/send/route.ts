import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: process.env.EMAIL_TO as string,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}