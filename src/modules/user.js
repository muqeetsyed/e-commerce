import mongoose from "mongoose";
import * as argon2 from "argon2";

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    }
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next()

    try {
        this.password = await argon2.hash(this.password)
        next()
    } catch (error) {
        return next(error)
    }
})


const User = mongoose.model("User", userSchema);

export default User;