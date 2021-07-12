import express from 'express';
const router = express.Router();
import { login, register } from '../controller/userController/login&register';
import { isAuthenticatedUser } from '../controller/authentication';



export default function userRouter(){
    router
        .route("/login")
        .post(async(req, res)=>{
            await login(req, res)
        })

    router
        .route("/signup")
        .post(async(req, res) =>{
            await register(req, res);
        })

    router
        .route("/who")
        .get(isAuthenticatedUser, async(req, res) => {
            res.send("succesful jwt tokenization")
        })
    
    return router;
}