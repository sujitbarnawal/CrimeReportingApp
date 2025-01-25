import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";
import { connectDB } from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import reportRouter from "./routes/reportRoute.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//database connection
connectDB();

//middlewares
app.use(bodyParser.json());
app.use(cors());


//api endpoints
app.use('/api/user',userRouter)
app.use('/api/report',reportRouter)
app.use('/images',express.static('uploads'))




app.get("/", (req, res) => {
  res.send("Working");
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
