require('dotenv').config({ path: "./.env" });
import express, { Application } from "express"; 
import morgan from "morgan"; 
import bodyParser from "body-parser";
import { IndexRouter } from "./src/controllers/v0/index.router";
import { config } from "./src/config/config"; 

const c = config;

(async () => {
    const app: Application = express(); 
    const port = process.env.PORT || 5001; 

    app.use(morgan("short"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", c.dev.url);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next(); 
    });

    // router to version 0: 
    app.use("/v0", IndexRouter);
    
    // root uri: 
    app.get("/", async (req, res) => {
        res.status(200).send("mysketch.io Homepage"); 
    });

    app.listen(port, () => { console.log(`Feed Server listens on ${port}`) });
})();