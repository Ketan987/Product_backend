import express from 'express';
import jwt from 'jsonwebtoken';
import userSchema from '../../model/userSchema';
import env from 'dotenv';
env.config();
// const secret = process.env.jwt_token;


export const register = async(req:any, res:any) => {
    try{
        let user = new userSchema(req.body);
        await user.save();

        res.status(200).send(user)
    }
    catch(err){
        console.log(process.env.jwt_token);
        res.status(400).send({
            message : "Error while saving " + err.message
        })
    }
}


export const login = async(req:any, res:any)=>{
    try{
        const { email, password } = req.body;

        if(!email || !password) {
            
            res.status(400).json({ message : "credential are not matched"})
        }

        let user = await userSchema.findOne({email : req.body.email, password : req.body.password})
        if(!user){
            res.json({
                message : "failed"
            })
        }

        // jwt sign
        jwt.sign(
            {email, password}, "we8tewfhoer8ut89giuurbovperh8gpe9gjorgh", {expiresIn : "1d"},
            (err:any, token:any) => {
                if(err){
                    res.status(404).send({message : "token expired"})
                }
                else(
                    res.status(200).send({
                        email,
                        password,
                        token
                    })
                )
            }
        )
    }
    catch{

        res.json({
            message : "failed"
        })
    }
}