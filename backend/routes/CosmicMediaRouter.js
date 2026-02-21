import express from "express";
import updateMedia from "../controllers/CosmicMediaController.js";
import updateSubscribeData from "../controllers/SubscriberDataController.js";
import multer from "multer";
import asyncWrap from "../WrapError/asyncWrap.js";
import GetCosmicMedia from "../controllers/GetCosmicMedia.js";
import path from "path";
import verifyEmail from "../verifyEmail.js";
import newsController from "../controllers/newsController.js";
import GetNewsDataController from "../controllers/GetNewsDataController.js";
import { deactiveHeader, deactiveNews } from "../controllers/deactiveDataController.js";
import isAdminValid from "../controllers/isAdminValidController.js";





const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage })

let mediaRouter = express.Router();

mediaRouter.post("/media/header",upload.single("img_url"),asyncWrap(updateMedia));
// mediaRouter.post(
//   "/media/upload",

//   // ✅ field name MUST match FormData.append("img", ...)
//   upload.single("img"),

//   (req, res) => {
//     console.log("data uploaded");

//     // ✅ now these will work
//     console.log(req.file);
//     console.log(req.body);

//     // ❌ OLD (no response sent)
//     // console.log("data uploaded");

//     // ✅ NEW
//     res.status(200).json({ message: "Upload successful" });
//   }
// );

mediaRouter.post("/signup",upload.none(),asyncWrap(updateSubscribeData));

mediaRouter.get("/cosmicdata",asyncWrap(GetCosmicMedia));


mediaRouter.get("/auth/verify-email",asyncWrap(verifyEmail));

mediaRouter.post("/media/news",upload.single("img_url"),asyncWrap(newsController));

mediaRouter.get("/newsdata",asyncWrap(GetNewsDataController));

mediaRouter.patch("/deactiveNews",asyncWrap(deactiveNews));
 
mediaRouter.patch("/deactiveHeader",asyncWrap(deactiveHeader));

mediaRouter.post("/adminlogin",asyncWrap(isAdminValid));



export default mediaRouter;
