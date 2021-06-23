import express from 'express';
import deleteByid from '../controller/productController/deleteByid';
import getAllproduct from '../controller/productController/getAllproduct';
import getProductbyid from '../controller/productController/getProductbyid';
import postProduct from '../controller/productController/postProduct';
import putByid from '../controller/productController/putByid';
const router = express.Router();

export default function getRouter(){
    router
        .route("/products")
        .get(async(req, res) => {
            await getAllproduct(req, res);
        })
        .post(async(req, res) => {
            await postProduct(req, res);
        })

    router
        .route("/product/:id")
        .get(async(req, res) => {
            await getProductbyid(req, res);
        })
        .delete(async(req, res) =>{
            await deleteByid(req, res);
        })
        .put(async(req, res) => {
            await putByid(req, res);
        })



    return router;
}