import axios from 'axios';
import productSchema from '../../model/productSchema';
import logger from '../../utils/logger';

export default async(req:any, res:any) => {
    try{
        // console.log(req.body)
        let product = new productSchema(req.body);
        await product.save();
        // console.log(product);
        
        res.status(200).json({
            message : "product data added successfully",
            status : "success",
            data : product
        })
    }
    catch(err){
        logger.error(err.message)
        res.status(400).json({
            status : "failure",
            message : err.message,
            data : []
        })
    }
}