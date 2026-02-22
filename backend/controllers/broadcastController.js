// import subscriberModel from "../models/SubscriberModel.js";
// import nodemailer from "nodemailer";

// /* -------------------- MAIL TRANSPORTER (ONCE) -------------------- */
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "ks8295476@gmail.com",
//     pass: "jcmb lota olbh ypam",
//   },
// });

// /* -------------------- SEND SINGLE MAIL -------------------- */
// async function sendPost(email, obj) {
//   return transporter.sendMail({
//     from: `"Space Vector" <ks8295476@gmail.com>`,
//     to: email,
//     subject: "New post",
//     html: `
//       <h2>${obj.heading}</h2>
//       <hr />
//       <p>${obj.description}</p>
//     `,
//   });
// }

// /* -------------------- ASYNC FOREACH (WAITS PROPERLY) -------------------- */
// async function asyncForEach(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//     await callback(array[index], index, array);
//   }
// }

// /* -------------------- BROADCAST CONTROLLER -------------------- */
// export default async function broadcastController(obj) {
//   try {
//     // 1️⃣ Fetch subscribers
//     const subscribers = await subscriberModel.find({
//       isSubscribed: true,
//       isVerified: true,
//     });

//     console.log("📢 Total subscribers:", subscribers.length);

//     // 2️⃣ Send emails sequentially (WAITING)
//     await asyncForEach(subscribers, async (user) => {
//       try {
//         console.log("➡️ Sending email to:", user.email);
//         await sendPost(user.email, obj);
//         console.log("✅ Email sent to:", user.email);
//       } catch (err) {
//         console.error("❌ Failed for:", user.email, err.message);
//       }
//     });

//     console.log("🎯 Broadcasting completed");

//   } catch (err) {
//     console.error("❌ broadcastController error:", err);
//   }
// }


// import subscriberModel from "../models/SubscriberModel.js";
// import { Resend } from "resend";

// /* -------------------- RESEND CLIENT -------------------- */
// const resend = new Resend("re_2iPz7SW3_GqsoHim1usA4H8vK5sjqyqtM");

// /* -------------------- SEND MAIL -------------------- */
// async function sendPost(email, obj) {
//   return resend.emails.send({
//     from: "Space Vector <onboarding@resend.dev>",
//     to: email,
//     subject: "New post published 🚀",
//     html: `
//       <h2>${obj.heading}</h2>
//       <hr />
//       <p>${obj.description}</p>
//     `,
//   });
// }

// /* -------------------- BROADCAST CONTROLLER -------------------- */
// export default async function broadcastController(obj) {
//   try {
//     const subscribers = await subscriberModel.find({
//       isSubscribed: true,
//       isVerified: true,
//     });

//     console.log("📢 Subscribers:", subscribers.length);

//     // 🔥 Fire-and-forget (Render-safe)
//     for (const user of subscribers) {
//   try {
//     await sendPost(user.email, obj);
//     console.log("✅ Sent to:", user.email);
//   } catch (err) {
//     console.error("❌ Failed for:", user.email, err.message);
//   }
// }}
// catch (err) {
//     console.error("❌ broadcastController error:", err);
//   }
// }

import subscriberModel from "../models/SubscriberModel.js";
import { Resend } from "resend";

/* -------------------- RESEND CLIENT -------------------- */
const resend = new Resend("re_2iPz7SW3_GqsoHim1usA4H8vK5sjqyqtM");

/* -------------------- BROADCAST CONTROLLER -------------------- */
export default async function broadcastController(obj) {
  try {
    const subscribers = await subscriberModel.find({
      isSubscribed: true,
      isVerified: true,
    });

    console.log("📢 Subscribers found:", subscribers.length);

    if (!subscribers.length) return;

    // 🔥 PICK ONLY ONE EMAIL (FIRST ONE)
    const email = subscribers[0].email;

    console.log("📨 Sending to (test mode):", email);

    await resend.emails.send({
      from: "Space Vector <onboarding@resend.dev>",
      to: email, // ✅ SINGLE EMAIL ONLY
      subject: "New post published 🚀",
      html: `
        <h2>${obj.heading}</h2>
        <hr />
        <p>${obj.description}</p>
      `,
    });

    console.log("✅ Test email sent successfully");
  } catch (err) {
    console.error("❌ broadcastController error:", err.message);
  }
}
