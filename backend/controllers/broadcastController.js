import subscriberModel from "../models/SubscriberModel.js";
import nodemailer from "nodemailer";

/* -------------------- MAIL TRANSPORTER (ONCE) -------------------- */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ks8295476@gmail.com",
    pass: "jcmb lota olbh ypam",
  },
});

/* -------------------- SEND SINGLE MAIL -------------------- */
async function sendPost(email, obj) {
  return transporter.sendMail({
    from: `"Space Vector" <ks8295476@gmail.com>`,
    to: email,
    subject: "New post",
    html: `
      <h2>${obj.heading}</h2>
      <hr />
      <p>${obj.description}</p>
    `,
  });
}

/* -------------------- ASYNC FOREACH (WAITS PROPERLY) -------------------- */
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

/* -------------------- BROADCAST CONTROLLER -------------------- */
export default async function broadcastController(obj) {
  try {
    // 1️⃣ Fetch subscribers
    const subscribers = await subscriberModel.find({
      isSubscribed: true,
      isVerified: true,
    });

    console.log("📢 Total subscribers:", subscribers.length);

    // 2️⃣ Send emails sequentially (WAITING)
    await asyncForEach(subscribers, async (user) => {
      try {
        console.log("➡️ Sending email to:", user.email);
        await sendPost(user.email, obj);
        console.log("✅ Email sent to:", user.email);
      } catch (err) {
        console.error("❌ Failed for:", user.email, err.message);
      }
    });

    console.log("🎯 Broadcasting completed");

  } catch (err) {
    console.error("❌ broadcastController error:", err);
  }
}
