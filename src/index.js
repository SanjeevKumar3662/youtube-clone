import "dotenv/config";

import express from "express";

import connectDB from "./db/db.js";

// const app = express();

connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
//     console.log("db connected !");
//     app.on("error", (err) => {
//       console.error("ERR", err.message);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// })();
