import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";
// import questionRouter from '../routes/question-router';
import ProductRouter from '../routes/productRoutes';
// import deleteByid from '../controller/productController/deleteByid';
// import getAllproduct from '../controller/productController/getAllproduct';
// import getProductbyid from '../controller/productController/getProductbyid';
// import postProduct from '../controller/productController/postProduct';
// import putByid from '../controller/productController/putByid';
import * as request from '../controller/productController/index';
import logger from "../utils/logger";
import userRouter from "../routes/userRoutes";




const configureEvironment=()=>{
    env.config();

}

async function connectToDb() {
    const connStr = `mongodb+srv://KetanUser:${process.env.DB_PASS}@clustermern.qtl6k.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
    console.log("Initializing  database connection");
    await mongoose.connect(connStr, { useNewUrlParser: true, useUnifiedTopology: true, });
    console.log("database connection established");
}
function configureExpress() {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/api', ProductRouter(request));
    app.use('/api', userRouter());
    app.get("/", (req, res)=>{
        res.send("Welcome to my server");
        logger.info("Server Sent basic Request");
    })
    return app;
}

const startServer = async () => {
    configureEvironment()
    await connectToDb();
    const app = configureExpress();
    const server = app.listen(process.env.PORT);
    server.on("error", (error: any) => {
        console.log("server error", error.message);
    });
}

startServer()
.then(()=>{console.log('server started on port',process.env.PORT)})
.catch((error:any)=>{console.log("error starting server",error.message)})
