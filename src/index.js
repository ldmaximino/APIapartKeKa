//Third party imports
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";

//Local imports
import { __dirname } from "./path.js";
import { initMongoDB } from "./db/connection_mongodb.js";
import MainRouter from "./routes/main.js";

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

//routes
app.use("/", mainRouter.getRouter());

//server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} 🚀🚀🚀🚀`);
});

initMongoDB();
