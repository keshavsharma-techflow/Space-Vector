import subscriberModel from "../models/SubscriberModel.js";
import nodemailer from 'nodemailer';

let sendPost = async(email,obj)=>{

  const transporter = nodemailer.createTransport({
    service: "gmail",
      auth: {
    user: "ks8295476@gmail.com",
    pass: "jcmb lota olbh ypam",
  },
   
  });

   

      await transporter.sendMail({
    from: `"Cosmic App" <ks8295476@gmail.com>`,
    to: email,
    subject: "New post",
    html: `
      <h2>'${obj.heading}'</h2>
      <hr />
      <p>'${obj.description}'</p>
  
    `,
  });

    
}

export default async function broadcastController(obj){
    //finding valid users
    let res = await subscriberModel.find({isSubscribed:true,isVerified:true});
    console.log(res);

   
    //sending email
    res.forEach((ele) =>{
  
           sendPost(ele.email,obj)
           .then()
           .catch((err) => console.log(err)) 

    


})
}