import express from "express";
import {authenticateUser} from "../utils/userAuthentication.js";

const router = express.Router();

router.post('/add', authenticateUser, (req, res) => {
    return res.status(200).json({"authenticatedUser": req.user.name})
});

export default router;