 const express= require('express');
 require('./DataBase/config');
 const cors=require('cors');
   const user=require("./DataBase/users");
// const users = require('./DataBase/users');

 const app=express();
   app.use(express.json());
   app.use(cors());
   
  app.post("/register",async (req,resp)=>{
     console.log("Body:",req.body);
           let user1= new user(req.body);
                console.log(" beforsaveBody:",req.body);

             user1= await user1.save();
                  console.log("after save:",req.body);

             resp.send(user1);
  })

  app.listen(5000);
