import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from 'body-parser';
import connection from "./config/connectDB";

const app = express();
const PORT = process.env.PORT || 8080;

// config view
configViewEngine(app)

//config body-parset
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//test connection
connection();

// init web 
initWebRoutes(app)

app.listen(PORT,()=>{
    console.log("check "+PORT)
})