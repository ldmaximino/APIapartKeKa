//Third party imports
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';

//Local imports
import { __dirname } from "./path.js";
import { initMongoDB } from "./db/connection_mongodb.js";
import MainRouter from "./routes/main.js";
import { errorHandler } from "./middlewares/error_handler.js";

//Instance of MainRouter
const mainRouter = new MainRouter();

//app express
const app = express();

//PORT
const PORT = process.env.PORT || 5003;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://apartkeka.netlify.app/");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//routes
app.use("/", mainRouter.getRouter());

//manage errors
app.use(errorHandler);

//server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} 🚀🚀🚀🚀`);
});

initMongoDB();
