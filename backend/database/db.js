import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        console.log('Attempting to connect to MongoDB...');
        console.log('MONGO_URI exists:', !!process.env.MONGO_URI);
        
        const options = {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 0,
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            heartbeatFrequencyMS: 10000,
            maxIdleTimeMS: 30000
        };
        
        await mongoose.connect(process.env.MONGO_URI, options);
        console.log("✅ MongoDB connected successfully");
        
    } catch (error) {
        console.log("❌ MongoDB connection error:", error.message);
        console.log("Full error:", error);
        
        // For development, don't exit - let app continue without DB
        if (process.env.NODE_ENV !== 'production') {
            console.log('⚠️ Continuing without database in development mode');
            return;
        }
        
        // In production, exit with failure
        process.exit(1);
    }
}

export default connectDB;