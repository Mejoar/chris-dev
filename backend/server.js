import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js"
import userRoute from "./routes/user.route.js"
import blogRoute from "./routes/blog.route.js"
import commentRoute from "./routes/comment.route.js"
import cookieParser from 'cookie-parser';
import cors from 'cors'
import path from "path"

dotenv.config()
const app = express()

const PORT = process.env.PORT || 3000


// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        const allowedOrigins = [
            "http://localhost:5173", 
            "http://localhost:3000", 
            "https://chrisdev-blog.netlify.app",
            "https://chrisdev-blog.onrender.com",
            "https://mern-blog-ha28.onrender.com",
            "https://chris-dev-backend.onrender.com",
            "https://frontend-8wt7wj8fh-chris-projects-7330068d.vercel.app"
        ];
        
        // Check if origin is in allowed list or matches Vercel pattern
        if (allowedOrigins.includes(origin) || 
            origin.match(/https:\/\/frontend-.*-chris-projects-7330068d\.vercel\.app$/)) {
            return callback(null, true);
        }
        
        console.log('CORS blocked origin:', origin);
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}))

const _dirname = path.resolve()

// Health check endpoint
app.get("/", (req, res) => {
    res.json({ 
        message: "Chris Dev Blog API is running!", 
        status: "success",
        timestamp: new Date().toISOString()
    });
});

// apis
 app.use("/api/v1/user", userRoute)
 app.use("/api/v1/blog", blogRoute)
 app.use("/api/v1/comment", commentRoute)

// Only serve static files in development or when frontend is built
if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.join(_dirname,"/frontend/dist")));
    app.get("*", (_, res)=>{
        res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
    });
} 

// Catch-all for non-API routes (must be after API routes)
app.get("*", (req, res) => {
    // Don't intercept API routes
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ message: "API endpoint not found" });
    }
    
    res.json({ 
        message: "Chris Dev Blog API - Frontend is deployed separately on Netlify",
        api: "https://chris-dev-backend.onrender.com/api/v1",
        frontend: "https://chrisdev-blog.netlify.app"
    });
});

app.listen(PORT, ()=>{
    console.log(`🚀 Server listen at port ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔑 JWT Secret exists: ${!!process.env.JWT_SECRET}`);
    console.log(`🗄️ MongoDB URI exists: ${!!process.env.MONGO_URI}`);
    console.log(`☁️ Cloudinary configured: ${!!process.env.CLOUDINARY_CLOUD_NAME}`);
    connectDB()
})
