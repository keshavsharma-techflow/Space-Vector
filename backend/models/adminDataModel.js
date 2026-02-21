import mongoose from 'mongoose';

let schema = new mongoose.Schema({

    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
      createdAt:{
        type:Date,
        default:Date.now()
      },
  lastLogin:{
         type:Date,
        default:Date.now()
  }
});

let adminDataModel = mongoose.models.adminDataModel || mongoose.model("adminDataModel",schema)
export default adminDataModel;