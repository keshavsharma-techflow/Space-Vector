import { Resend } from "resend";

/* -------------------- RESEND CLIENT -------------------- */
const resend = new Resend("re_2iPz7SW3_GqsoHim1usA4H8vK5sjqyqtM");

export default async function sendVerificationMail(email, token) {
  try {
    const verificationLink = `https://space-vector-backend.onrender.com/api/auth/verify-email?token=${token}`;

    console.log("📧 Sending verification email (test mode) to:", email);

    await resend.emails.send({
      from: "Cosmic App <onboarding@resend.dev>", // ✅ TEST MODE
      to: email, // ⚠️ Only your Resend account email will receive
      subject: "Verify your email",
      html: `
        <h2>Email Verification</h2>
        <p>Click the link below to verify your email:</p>
        <a href="${verificationLink}">Verify Email</a>
        <p>This link expires in 24 hours.</p>
      `,
    });

    console.log("✅ Verification email sent (test mode)");
  } catch (err) {
    console.error("❌ Verification email error:", err.message);
  }
}