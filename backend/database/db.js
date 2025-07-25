import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
            socketTimeoutMS: 45000, // 45 seconds
            family: 4, // Use IPv4, skip trying IPv6
            retryWrites: true,
            w: 'majority'
        };
        
        await mongoose.connect(process.env.MONGO_URI, options);
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log("MongoDB connection error", error);
        // Exit process with failure
        process.exit(1);
    }
}

export default connectDB;