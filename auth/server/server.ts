require('dotenv').config({ path: "./.env"});
import express, { Application } from 'express';
import morgan from "morgan";
import mongoose, { ConnectOptions }  from "mongoose"; 
import bodyParser from "body-parser"; 
import { config } from "./src/config/config";
import { IndexRouter } from "./src/controllers/v0/index.router";

const c = config.dev;
const mongodbURL = c.url;

(async () => {
  mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
  } as ConnectOptions)

  const db = mongoose.connection;
  await db.on("error", console.error.bind(console, "MongoDB connection error"));
  await db.once("open", function () {
    console.log("MongoDB server connected");
  });

  const app: Application = express(); 
  const port = process.env.PORT || 5000;

  app.use(morgan("short")); // log request middleware
  app.use(bodyParser.json()); // parse the request and create the req.body object
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use((req, res,next) => {
    res.header("Access-Control-Allow-Origin", c.url);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next(); 
  });

  // use router: 
  app.use("/v0/", IndexRouter);

  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.status(200).send( "Welcome to mysketch.io" );
  } );

  app.listen(port, () => { console.log(`Auth Server listens on ${port}`)}); 
})();
