
const mongoose=require('mongoose');
    
  async function connect(){
      try{
           
         await   mongoose.connect(process.env.Mongodb_URL);
         console.log("Server is Running...");

      }catch (error){
        console.log("Connection Failed ",error.message);
        process.exit(1);
      }
}
  
module.exports=connect; 