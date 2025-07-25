import express from "express"
import { getAllUsers, login, logout, register, updateProfile } from "../controllers/user.controller.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import { singleUpload } from "../middleware/multer.js"

const router = express.Router()

// Test endpoint
router.get("/test", (req, res) => {
    res.json({ 
        success: true, 
        message: "User routes are working!",
        timestamp: new Date().toISOString()
    });
});

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile/update").put(isAuthenticated, singleUpload, updateProfile)
router.get('/all-users', getAllUsers);

export default router;