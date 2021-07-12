import axios from 'axios';
import productSchema from '../../model/productSchema';
import logger from '../../utils/logger';

export default async(req:any, res:any) => {
    console.log(req.params.id);
    try{
        let product = await productSchema.findOne({id : req.params.id})
        res.status(200).json({
            status : "success",
            message : "product data by id",
            data : product
        })
    }
    catch(err){
        logger.error(err.message)
        res.status(400).json({
            status : "failure",
            message : "No Record Found " + err.message,
            data : {}
            
        })
    }
}