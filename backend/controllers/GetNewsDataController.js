import NewsModel from "../models/NewsMediaModel.js";

export default async function GetNewsDataController(req,res){
    console.log("------------- request hit models/GetNewsDataController.js ----------------------- ");
    let result = await NewsModel.find({isActive:true});
   
    res.send(result)

}