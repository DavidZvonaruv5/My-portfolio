import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req,res) {

  const reqbody = await req.json();

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

  const sendMail = (mailOptions, callback) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        callback(false); // Pass false to the callback if there's an error
      } else {
        console.log('Email sent:', info.response);
        callback(true); // Pass true to the callback if email sent successfully
      }
    });
  }

  new Promise((resolve) => sendMail(mailOptions, 0, resolve)).then((results) => {
    const mailsent = results.every((results) => results === true);
    if (mailsent) {
      results.statusCode = 200;
      res.json({ message: 'Email sent successfully' });
    } else {
      results.statusCode = 500;
      res.json({ message: 'Email failed to send' });
    }
  }).catch((error) => {
          res.statusCode = 200;
          res.json({ message: 'Email sent successfully' });
  })

}
