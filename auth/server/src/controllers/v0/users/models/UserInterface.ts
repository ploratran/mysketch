import { Document } from "mongoose"; 

export interface UserInterface extends Document {
    email: string, 
    username: string, 
    password: string, 
    // cpassword: string,
}