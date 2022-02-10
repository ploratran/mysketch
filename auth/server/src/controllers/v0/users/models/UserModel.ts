import mongoose, { Schema } from "mongoose";
import { UserInterface } from "./UserInterface";

// schema
const userSchema: Schema = new mongoose.Schema<UserInterface>(
    {
        email: {
            type: String,
            required: true, 
            unique: true
        }, 
        username: {
            type: String, 
            required: true, 
            unique: true, 
        }, 
        password: {
            type: String, 
            required: true, 
        }, 
        // cpassword: {
        //     type: String, 
        //     required: true
        // },
    }, 
);

// Model: 
const UserModel = mongoose.model<UserInterface>("User", userSchema); 

export { UserModel };