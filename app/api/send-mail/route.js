import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {

  const reqbody = await request.json();

  const transporter = createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'davidze99@gmail.com',
    subject: 'New message from My Portfolio',
    text: `
      Name: ${reqbody['name']}
      Email: ${reqbody['email']}
      Message: ${reqbody['message']}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
  return NextResponse.json({message: 'Email sent successfully'}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: 'Email failed to send'}, {status: 500})
  }

}
