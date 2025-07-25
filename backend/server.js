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
            console.log('✅ CORS allowed for origin:', origin);
            return callback(null, true);
        }
        
        console.log('❌ CORS blocked origin:', origin);
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['Set-Cookie']
}))

const _dirname = path.resolve()

// Health check endpoint
app.get("/", (req, res) => {
    res.json({ 
        message: "Chris Dev Blog API v2.0 - FIXED VERSION is running!", 
        status: "success",
        version: "2.0-fixed",
        deployment: new Date().toISOString(),
        timestamp: new Date().toISOString()
    });
});

// apis
 app.use("/api/v1/user", userRoute)
 app.use("/api/v1/blog", blogRoute)
 app.use("/api/v1/comment", commentRoute)

// 404 handler for unmatched routes
app.use('*', (req, res) => {
    console.log(`❌ 404 - Route not found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ 
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`,
        timestamp: new Date().toISOString()
    });
});

// Note: Removed ALL catch-all routes that were interfering with API calls
// API endpoints should be handled by their respective routers only
// Frontend is deployed separately on Netlify/Vercel

app.listen(PORT, ()=>{
    console.log(`🚀 CHRIS DEV BLOG API v2.0 - Server listening on port ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔑 JWT Secret exists: ${!!process.env.JWT_SECRET}`);
    console.log(`🗄️ MongoDB URI exists: ${!!process.env.MONGO_URI}`);
    console.log(`☁️ Cloudinary configured: ${!!process.env.CLOUDINARY_CLOUD_NAME}`);
    console.log(`⚡ DEPLOYMENT TIMESTAMP: ${new Date().toISOString()}`);
    console.log(`📡 All routes loaded and ready!`);
    connectDB()
})
