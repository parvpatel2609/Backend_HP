import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mnongodb database ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error in MOngodb ${error}`)
    }
} 

export default connectDB;