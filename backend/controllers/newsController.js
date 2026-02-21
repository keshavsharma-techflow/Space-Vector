import NewsModel from "../models/NewsMediaModel.js";
import broadcastController from "./broadcastController.js";


export default async function newsController(req,res){
      let img_url = req.file.filename;
    console.log( "data of req.body is ",req.body);
    console.log( "data of img_url is ",img_url);
    let{heading, author, category, description, isActive}  = req.body;

    let u1 = await NewsModel({heading, author, category, description, isActive,img_url});

    try{
        u1.save();
        res.status(200).json({ success: true });
        await broadcastController({heading,description});
    }
    catch(err){
        console.log(err);
         res.status(404).json({ success: false });
    }


}