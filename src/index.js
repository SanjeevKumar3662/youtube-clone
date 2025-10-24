import "dotenv/config";
import connectDB from "./db/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.error("Error :", err.message);
      throw err;
    });

    app.listen(PORT, () => {
      console.log(`listening on port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed");
  });

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
