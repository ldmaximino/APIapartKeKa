//Third party imports
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';

//Local imports
import { __dirname } from "./path.js";
import { initMongoDB } from "./db/connection_mongodb.js";
import MainRouter from "./routes/main.js";
import { errorHandler } from "./middlewares/error_handler.js";
import { CORSORIGIN } from './config/config.js';

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

const allowedOrigins = CORSORIGIN;
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type"
};
app.use(cors(corsOptions));

//routes
app.use("/", mainRouter.getRouter());

//manage errors
app.use(errorHandler);

//server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} 🚀🚀🚀🚀`);
});

initMongoDB();
