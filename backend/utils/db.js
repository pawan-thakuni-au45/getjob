
import mongoose, { connect } from "mongoose";

const ConnectDb = async()=>{
       try{

              await mongoose.connect(process.env.MONGOOSE_URL)
       console.log("DATABASE IS CONNECTED")
       }catch(error){
              console.log(error);;
       }
       
}
export default ConnectDb