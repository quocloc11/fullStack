import express from "express";
import homeController from '../controller/homeController'
const router =express.Router();
/**
 * 
 * @param {*} app express
 */


const initWebRoutes = (app) =>{
    router.get("/",homeController.handleHelloWord)
    router.get("/user",homeController.handleUserPage )
    router.post("/users/create-user",homeController.handleCreateNewUser)
    router.post("/dele-user/:id",homeController.handleDelteUser)
    return app.use("/",router);
}
export default initWebRoutes;