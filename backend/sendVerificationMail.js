
import nodemailer from 'nodemailer';

export default async function sendVerificationMail(email,token){
   const transporter = nodemailer.createTransport({
    service: "gmail",
      auth: {
    user: "ks8295476@gmail.com",
    pass: "jcmb lota olbh ypam",
  },
   
  });

    const verificationLink = `http://localhost:8080/api/auth/verify-email?token=${token}`;

      await transporter.sendMail({
    from: `"Cosmic App" <ks8295476@gmail.com>`,
    to: email,
    subject: "Verify your email",
    html: `
      <h2>Email Verification</h2>
      <p>Click the link below to verify your email:</p>
      <a href="${verificationLink}">Verify Email</a>
      <p>This link expires in 24 hours.</p>
    `,
  });


}