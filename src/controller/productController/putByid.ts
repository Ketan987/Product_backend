import axios from 'axios';
import productSchema from '../../model/productSchema';
import logger from '../../utils/logger';

export default async(req:any, res:any) => {
    try{
        let product = await productSchema.findOneAndUpdate({id : req.params.id}, {price : req.body.price, rating : req.body.rating})
        logger.info("successfully update data")
        res.status(200).json({
            status : "success",
            message : "product data",
            data : product
        })
    }
    catch(err){
        logger.error(err.message)
        res.status(400).json({
            status : "failure",
            message : "No Record Found",
            data : {}
            
        })
    }
}