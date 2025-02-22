import mongoose from "mongoose";
import * as argon2 from "argon2";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
    },
    region: {
        type: String,
    },
    zipCode: {
        type: String,
        required: true,
    },
    country: {
        type: String,
    },
    miscInfo: {
        type: String,
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