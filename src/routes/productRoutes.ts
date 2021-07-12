import express from 'express';
// import deleteByid from '../controller/productController/deleteByid';
// import getAllproduct from '../controller/productController/getAllproduct';
// import getProductbyid from '../controller/productController/getProductbyid';
// import postProduct from '../controller/productController/postProduct';
// import putByid from '../controller/productController/putByid';
const router = express.Router();

// const documents = {
//     deleteByid,
//     getAllproduct,
//     getProductbyid,
//     postProduct,
//     putByid
// }

export default function getRouter(documents:any){
    router
        .route("/products")
        .get(async(req, res) => {
            await documents.getAllproduct(req, res);
        })
        .post(async(req, res) => {
            await documents.postProduct(req, res);
        })

    router
        .route("/product/:id")
        .get(async(req, res) => {
            await documents.getProductbyid(req, res);
        })
        .delete(async(req, res) =>{
            await documents.deleteByid(req, res);
        })
        .put(async(req, res) => {
            await documents.putByid(req, res);
        })

    return router;
}