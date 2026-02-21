
import subscriberModel from "./models/SubscriberModel.js";
export default async function verifyEmail(req,res){
  let {token} = req.query;
  let result = await subscriberModel.findOne({emailVerifyToken:token});
  await subscriberModel.updateOne({emailVerifyToken:token},{ isVerified: true})
  console.log(result);
  res.send("Email verified successfully ✅");

}
