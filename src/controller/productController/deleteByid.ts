import axios from 'axios';
import productSchema from '../../model/productSchema';
import logger from "../../utils/logger";

export default async(req:any, res:any) => {
    try{
        let product = await productSchema.findOneAndDelete({id : req.params.id})
        res.status(200).json({
            status : "success",
            message : "all product data",
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