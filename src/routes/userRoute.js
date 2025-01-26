import express from 'express';
import User from '../modules/user.js';
import { generateToken } from "../utils/jwt.js";
import * as argon2 from "argon2";

const router = express.Router();

// Get All Users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        res.status(500).send("Server error")
    }
})


// Create new user
router.post("/create", async (req, res) => {
    try {
        const {name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if(existingUser instanceof User) {
            return res.status(400).json({ error: "User already exists" })
        }

        const newUser = new User({
            name: name,
            email: email,
            password: password
        });

        await newUser.save();

        const token = generateToken({ userId: newUser._id });

        res.status(201).json(token)
    } catch (err) {
        res.status(500).send(err)
    }
})


// login user
router.get('/login', async (req, res) => {
    try {
        const {email, password} = req.body

        const existingUser = await User.findOne({ email });

        if (!existingUser instanceof User) {
            return res.status(400).json({error: "User does not exists"})
        }

        const isMatch = await argon2.verify(existingUser.password, password)

        if(!isMatch) {
            return res.status(400).json({error: "Password does not match"})
        }

        const token = generateToken({ userId: existingUser._id });

        res.json({ token })
    }catch (err) {
        res.status(500).send(err)
    }
});


router.delete("/delete/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user instanceof User) {
            await user.deleteOne();

            return res.status(200).json("User deleted successfully!")
        }

        return res.status(404).json({msg: "User not found"})
    } catch (e) {
        res.status(500).send(e)
    }
});


// Export the router
export default router;
