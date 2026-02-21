 import subscriberModel from "../models/SubscriberModel.js";
import generateEmailToken from "../generateEmailToken.js";
import sendVerificationMail from "../sendVerificationMail.js";


  


let updateSubscribeData = async(req,res) =>{
    console.log(req.body);
    let  emailVerifyToken = generateEmailToken();
    let{email,firstName,lastName,city,zipCode,state,country} = req.body;
 let s1 = new subscriberModel({email,firstName,lastName,city,zipCode,state,country, emailVerifyToken});
 try{
    await sendVerificationMail(email,emailVerifyToken);
 
    console.log("hogaya save");
    await s1.save();
      
    res.status(200).json({"success":true})


 }
 catch(e){
   
 
    console.log(e);
      res.status(404).send('an error occured');
 }
}

export default updateSubscribeData;
