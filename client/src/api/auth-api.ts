import axios from "axios"; 
import { API_URL } from "../config"; 

// POST request to register new user: 
export async function register(email: string, username: string, password: string): Promise<any> {
    const response = await axios.post(API_URL + "register", {
        email, 
        username, 
        password,
    });

    console.log(response); 
    
    return response; 
}