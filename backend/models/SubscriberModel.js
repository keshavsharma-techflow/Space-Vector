import mongoose from 'mongoose';





let schema = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
        index:true,
         trim: true,
    },
    isVerified:{
        type:Boolean,          
        default:false,
        index:true
    },
    firstName:{
        type:String,
        required:true,
         trim: true,
    },
    lastName:{
        type:String,
        required:true,
         trim: true,
    },
    city:{
        type:String,
        required:true
    },
        zipCode: {
      type: String,
      trim: true
    },
        isSubscribed: {
      type: Boolean,
      default: true
    },
    state:{
        type:String,
        required:true
    },
    emailVerifyToken:{
        type:String,
        required:true
    },
    emailVerifyToken:{
        type:String,
        required:true
    },

    emailVerifyExpiry:{
         type:Date,
         default:Date.now() + 24 * 60 * 60 * 1000,
    }},
  {
    timestamps: true
  }

)

let subscriberModel = mongoose.models.subscriberModel||mongoose.model("subscriberModel",schema);
export default subscriberModel;