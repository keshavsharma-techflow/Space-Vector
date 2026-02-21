import CosmicMediaModel from "../models/CosmicMediaModel.js";
import NewsModel from "../models/NewsMediaModel.js";

async function deactiveHeader(req, res) {
  let { id } = req.body;
  console.log("id iss ",id);
  console.log("deactiveHeader called");
  try {
    await CosmicMediaModel.findByIdAndUpdate(
      { _id :id },
      { isActive: false },
      { new: true, runValidators: true },
    );
  } catch (err) {
    console.log(err);
  }
}
async function deactiveNews(req, res) {
  let { id } = req.body;
  try {
    await NewsModel.findByIdAndUpdate(
      { _id : id },
      { isActive: false },
      { new: true, runValidators: true },
    );
  } catch (err) {
    console.log(err);
  }
}

export { deactiveHeader, deactiveNews };
