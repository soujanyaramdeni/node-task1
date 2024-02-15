const express=require("express");
const app=express();

const port=3000;


app.use(express.json());

const  {LocalStorage} = require('node-localstorage')
const localStorage = new LocalStorage('./files');

let register=[];

app.post("/register",(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        return res.status(400).json({error:"all fields are requires"})
    }
    if(register.some(register=>register.email===email)){
        return res.status(409).json({error:"email is already exist"})
    }
    const user={username,email,password};
    register.push(user)
   
   
    localStorage.setItem("value",JSON.stringify(register));
        const storedValue = localStorage.getItem("value");
        res.send({storedValue});
   
        res.status(200).json({message:"user registered successfully"})

})


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})