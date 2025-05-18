import { Schema, model } from "mongoose";
import cartModel from "./carts.model.js";

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        default: "USER",
        enum: ["USER", "ADMIN", "PREM"],
        index: true
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: "carts"
    }
});

userSchema.post("save", async function name(userCreated){
    try {
        const newCart = await cartModel.create({products: []})
        await model("users").findByIdAndUpdate(userCreated._id, {
            cart: newCart._id
        })
    } catch (error) {
        console.log(error)
    }
});

const User = model("users", userSchema);

export default User;
