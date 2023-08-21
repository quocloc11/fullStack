import express from "express";

const router =express.Router();
/**
 * 
 * @param {*} app express
 */
const initWebRoutes = (app) =>{
    router.get("/",(req,res)=>{
     return res.send("hello")
    })

    return app.use("/",router);
}
export default initWebRoutes;