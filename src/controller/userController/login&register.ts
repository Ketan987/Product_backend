import express from 'express';
import userSchema from '../../model/userSchema';




const login = async(req:any, res:any)=>{
    try{
        let user = await userSchema.findOne({email : req.body.email, password : req.body.password})
        if(!user){
            res.json({
                message : "failed"
            })
        }
        res.json({
            message : "success"
        })
    }
    catch{
        res.json({
            message : "failed"
        })
    }
}