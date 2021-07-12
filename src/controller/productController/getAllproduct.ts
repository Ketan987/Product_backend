import productSchema from '../../model/productSchema';
import logger from '../../utils/logger';

export default async(request:any, response:any) => {
    try{
        // console.log(request.params, request.body)
        let products = await productSchema.find()
        response.status(200).json({
            status : "success",
            message : "all product data",
            data : products
        })
    }
    catch(err){
        logger.error(err.message)
        response.json({
            status : "failure",
            message : "No Record Found "+err.message,
            data : []   
        })
    }
}
