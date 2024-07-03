import User from "../models/User";

class Userrepository {
    async create(data){
        const user=new User(data)
        await user.save()
        return user
    }
    async findAll(){
        return User.find()
    }
    async findByid(id){
        return User.findById(id)
    }
    async findByEmail(email){
        return User.findOne({email})}
    async updateByid(id,data){
        return User.findByIdAndUpdate(id,data,{new:true})}
    async deleteByid(id){
        return User.findByIdAndDelete(id)}
}

const userrepository=new Userrepository()
export default userrepository