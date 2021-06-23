import axios from 'axios';
import productSchema from '../../model/productSchema';

export default async(req:any, res:any) => {
    try{
        let product = await productSchema.findOneAndUpdate({id : req.params.id}, {price : req.body.price, rating : req.body.rating})
        res.status(200).json({
            status : "success",
            message : "product data",
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