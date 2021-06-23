import axios from 'axios';
import productSchema from '../../model/productSchema';

export default async(req:any, res:any) => {
    try{
        let products = await productSchema.find()
        res.status(200).json({
            status : "success",
            message : "all product data",
            data : products
        })
    }
    catch{
        res.status(400).json({
            status : "failure",
            message : "No Record Found",
            data : []   
        })
    }
}