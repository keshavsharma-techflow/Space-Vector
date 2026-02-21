import CosmicMediaModel from "../models/CosmicMediaModel.js";

export default async function GetCosmicMedia(req, res) {
  console.log("-------------------request hit on controller/GetCosmicMedia.js----------------------");
  let result = await CosmicMediaModel.find({isActive:true});

  res.send(result);
}
