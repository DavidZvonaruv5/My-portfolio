import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {

  const reqbody = await req.json();
  console.log(reqbody);
  const transporter = createTransport({
    host: 'smtp.office365.com',
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptionsDavid = {
    from: process.env.EMAIL_USER,
    to: 'davidze99@gmail.com',
    subject: 'New message from My Portfolio',
    text: `
      Name: ${reqbody['name']}
      Email: ${reqbody['email']}
      Message: ${reqbody['message']}
    `
  };
      const result = transporter.sendMail(mailOptionsDavid)
      return new NextResponse({ result: 'Email sent' })
}
