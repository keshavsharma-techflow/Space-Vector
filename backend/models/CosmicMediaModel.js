import mongoose from "mongoose";

let mediaModel = new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    img_url:{
        type:String,
         required:true
    },
    description:{
         type:String,
         required:true
    },
    category:{
         type:String,
         required:true
    },
   paragraph :{
         type:String,
         required:true
    },
   isActive :{
         type:Boolean,
         default:false
    },
    author:{
         type:String,
         required:true
    }},
  {
    timestamps: true
  }
)

let CosmicMediaModel = mongoose.models.CosmicMediaModel||mongoose.model("CosmicMediaModel",mediaModel);

export default CosmicMediaModel;