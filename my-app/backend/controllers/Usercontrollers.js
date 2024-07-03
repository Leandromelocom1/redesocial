import userrepository from "../repository/Userrepository";
import userSchema from "../models/User"
import bcrypt from "bcrypt";

export async function createuser(req,res){
    const hashedpassword=bcrypt.hashSync(req.body.password,8)
    req.body.password=hashedpassword
    try{
        const newuser=new userSchema(req.body)
        const saveduser=await newuser.save()

        res.status(201).json(saveduser)
        }catch(err){
            res.status(500).json(err)
        }


}
export async function getAll (req,res){
    try{
        const users=await userrepository.findAll()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
}
export async function getbyid(req,res){
    try{
        const user=await userrepository.findByid(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(400).json(err)
    }
}
export async function updatebyid(req,res){
    try{
        const user=await userrepository.updateByid(req.params.id,req.body)
        res.status(200).json(user)
    }catch(err){
        res.status(400).json(err)
    }
}
export async function deletebyid(req,res){
    try{
        const user=await userrepository.deleteByid(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(400).json(err)
    }
}