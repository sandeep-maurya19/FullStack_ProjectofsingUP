const express= require('express');
 const cors=require('cors');
require("./db/config");
  const user=require("./db/users");

    
const app=express();
app.use(cors());

  app.use(express.json());

  app.post("/register", async (req,resp)=>{
             let user1=new user(req.body);
               
             user1=await user1.save();


            resp.send(user1);

  })

  app.post("/login", async (req,resp)=>{
       
          if(req.body.email && req.body.pass){
          
             let luser= await user.findOne(req.body).select("-pass");
             if(luser){
              resp.send(luser);
             }else{
                     resp.send({result : "++User is Not found"});

              }
            
            
            } else{
                     resp.send({result : "!!User is Not found"});
              }  
  })

  app.listen(8000);

