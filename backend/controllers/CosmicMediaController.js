import CosmicMediaModel from "../models/CosmicMediaModel.js";
import broadcastController from "./broadcastController.js";

// img: "", head: "",author:"",category:"",para:"", des: ""

let updateMedia = async (req, res) => {
  let { heading, author, category, description, paragraph, isActive } =
    req.body;
  let img_url = req.file.filename;

  let c1 = new CosmicMediaModel({
    img_url,
    heading,
    author,
    category,
    description,
    paragraph,
    isActive,
  });

  try {
    await c1.save();

    //broadcasting
    await broadcastController({heading,description});

      res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false });
  }
};

export default updateMedia;

// formData.append("img_url", data.img);

// // ✅ same (text fields are fine)
// formData.append("heading", data.head);
// formData.append("description", data.des);
// formData.append("category", data.category);
// formData.append("paragraph", data.para);
// formData.append("author", data.author);

//  heading:{
//     type:String,
//     required:true
// },
// image_url:{
//     type:String,
//      required:true
// },
// description:{
//      type:String,
//      required:true
// },
// category:{
//      type:String,
//      required:true
// },
// author:{
//      type:String,
//      required:true
// },
// date:{
//     type:Date,
//     required:true,
//     default:Date.now

// }
