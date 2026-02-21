import mongoose from 'mongoose';

let schema = new mongoose.Schema({

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

let NewsModel = mongoose.models.NewsModel ||mongoose.model("NewsModel",schema);
export default NewsModel;