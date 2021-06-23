import axios from 'axios';
import productSchema from '../../model/productSchema';

export default async(req:any, res:any) => {
    try{
        let product = await productSchema.findOne({id : req.params.id})
        res.status(200).json({
            status : "success",
            message : "product data by id",
            data : product
        })
    }
    catch{
        res.status(400).json({
            status : "failure",
            message : "No Record Found",
            data : {}
            
        })
    }
}