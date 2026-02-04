// let users=[];
// let id=1;
const User=require("../models/user")
exports.createUser=async(req,res)=>{
    try{
    const{name,email}=req.body;
    const exist=await User.findOne({email})
    if(exist)
        return res.status(401).json({message:"User already exist"})
    const user=await User.create({
       name,
       email
    })
    res.status(200).json(user);
}catch(err){
    res.status(500).send(err);
}
}
exports.getUser=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);

    }catch(err){
        res.status(500).json(users);
    }

}
exports.getUserById=(req,res)=>{
    const user=users.find((u)=>u.id===parseInt(req.params.id));
    if(user===undefined) return res.status(404).json({message:"User not found"})
        res.status(200).json(user)
}
exports.editUser=(req,res)=>{
    const user=users.find((u)=>u.id===parseInt(req.params.id));
    if(user===undefined) 
        return res.status(404).json({message:"User not found"});
    user.name=req.body.name ===undefined? user.name:req.body.name;
    user.email=req.body.email || user.email;
    res.status(200).json(user)

}
exports.deleteUser=(req,res)=>{
    const index=users.findIndex((u)=>u.id===parseInt(req.params.id));
    if(index===-1) 
        return res.status(404).json({message:"User not found"});
    users=users.filter((u,i)=>i!==index);
    res.status(200).json({message:"User Deleted Successfully"});
}