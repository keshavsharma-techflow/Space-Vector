// import cors from "cors";
// import express from 'express'
// import { connectDb } from "./config/db.js";
// import mediaRouter from "./routes/CosmicMediaRouter.js";
// import asyncWrap from "./WrapError/asyncWrap.js";
// import upload from "multer";
// const upload = multer({ dest: "uploads/" });

// const app = express();
// const port = 8080;


// app.use(express.json());
// app.use(cors());
// app.use("/api/media",mediaRouter);

// //connect database
// connectDb()
// .then(() => console.log("Database connected successfully"))
// .catch((err) => console.log(`err is ${err}`));


// app.listen(port,(req,res) =>{
//     console.log(`server is listening on port ${port}`);
// })


// app.post('/uploadData',upload.single('img'),(req,res) =>{
//     console.log("data uploaded");
// })

// app.use((err,req,res,next) =>{
//     console.log("Error comes in error handling middleware");
//     console.log(`error is ${err}`);
// })

import cors from "cors";
import express from "express";
import { connectDb } from "./config/db.js";
import mediaRouter from "./routes/CosmicMediaRouter.js";
import 'dotenv/config';





const app = express();
const port = process.env.PORT||8080;

app.use(express.json());
app.use(cors());
app.use("/api",mediaRouter);
app.use("/uploads", express.static("uploads"));


connectDb()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(`err is ${err}`));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});



app.use((err, req, res, next) => {
  console.log("Error comes in error handling middleware");
  console.log(err);
  res.status(500).json({ error: err.message });
});
