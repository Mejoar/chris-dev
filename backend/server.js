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
    origin: [
        "http://localhost:5173", 
        "http://localhost:3000", 
        "https://chrisdev-blog.netlify.app",
        "https://chrisdev-blog.onrender.com",
        "https://mern-blog-ha28.onrender.com",
        "https://chris-dev-backend.onrender.com",
        "https://frontend-8wt7wj8fh-chris-projects-7330068d.vercel.app",
        /https:\/\/frontend-.*-chris-projects-7330068d\.vercel\.app$/
    ],
    credentials:true
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
} else {
    // In production, just return API info for non-API routes
    app.get("*", (req, res) => {
        res.json({ 
            message: "Chris Dev Blog API - Frontend is deployed separately on Netlify",
            api: "https://chris-dev-backend.onrender.com/api/v1",
            frontend: "https://chrisdev-blog.netlify.app"
        });
    });
}

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`);
    connectDB()
})