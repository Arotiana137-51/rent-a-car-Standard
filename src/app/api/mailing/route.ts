// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/email";

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, message } = await req.json();

    // Basic validation
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create email HTML content
    const htmlContent = `<!DOCTYPE html>
      <html>
      <head>
      <meta charset="utf-8" description="mail from ngo website">
      <title>Email provenant du site </title>
      <style>
        .container {
        width: 100%;
        height: 100%;
        padding: 20px;
        background-color: #f4f4f4;
        }
        .email {
        width: 80%;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        }
        .email-header {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
        }
        .email-body {
        padding: 20px;
        }
        .email-footer {
        background-color: #333;
        color: #fff;
        padding: 20px;
        text-align: center;
        }
      </style>
      </head>
      <body>
      <div class="container">
        <div class="email">
        <div class="email-header">
          <h1>Email du site web de l'Ong</h1>
        </div>
        <div class="email-body">
          <p>${message}</p>
        </div>
        <div class="email-footer">
          <p>Expediteur: ${email} telephone de l'Expediteur: ${phone}</p>
        </div>
        </div>
      </div>
      </body>
      </html>`;

    // Send email
    await sendEmail({
      to: process.env.EMAIL_TO || "arotiana4612@gmail.com", // Add this to your .env
      subject: "New Contact Form Submission",
      html: htmlContent,
     
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}