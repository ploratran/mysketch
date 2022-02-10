import e, { Router, Request, Response } from "express"; 
import { UserModel } from "../models/UserModel"; 
import { UserType } from "../models/UserType";
import * as c from "../../../../config/config";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt"; 
import { NextFunction } from "connect";
import * as EmailValidator from "email-validator"; 

const router: Router = Router(); 

// JWT implementation: 
async function generatePassword(plainTextPassword: string): Promise<string> {
    const saltRounds = 10; 
    let salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(plainTextPassword, salt); 
}

async function comparePasswords(plaintTextPassword: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(plaintTextPassword, hash); 
}

function generateJWT(user: UserType): string {
    console.log("generateJWT");
    return jwt.sign({ user }, c.config.jwt); // pass jwt payload as object
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).send({ message: "No authorization headers." }); 
    }

    const token_bearer = req.headers.authorization.split(" ");
    if (token_bearer.length != 2) {
        return res.status(401).send({ message: "Malformed token." }); 
    }

    const token = token_bearer[1];
    return jwt.verify(token, c.config.jwt, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: "Failed to authenticate." });
        }
        return next(); 
    });
}

router.get("/", async (req: Request, res: Response) => {
    res.send("auth"); 
});

// signup new user: 
router.post("/register", async (req: Request, res: Response) => {

    const { email, username, password } = req.body;  

    // check email is valid: 
    if (!email || !EmailValidator.validate(email)) {
        return res.status(422).send({ auth: false, message: "Email is required or malformed." });
    }
    // check username is valid: 
    if (!username) {
        return res.status(422).send({ auth: false, message: "Username is required." });
    }
    // check password and cpassword are valid: 
    if (!password) {
        return res.status(422).send({ auth: false, message: "Password is required." });
    }

    // find user by email, if existed, return user already existed
    const user = await UserModel.findOne({ email: req.body.email }); 
    if (user) {
        return res.status(422).send({ auth: false, message: "User already existed." }); 
    }

    // generate hashed password using bcrypt: 
    const hashedPassword = await generatePassword(password); 

    // otherwise create a new user with hashedPassword: 
    const newUser = await new UserModel({
        email: email, 
        username: username,
        password: hashedPassword
        // cpassword: cpassword,
    });

    let savedUser; 
    try {
        savedUser = await newUser.save();
    } catch (e) {
        throw e;
    }

    // generate jwt: 
    const jwt = generateJWT(savedUser); 

    return res.status(201).send({ token: jwt, user: savedUser });
});


// login existed user using jwt:
router.post("/login", async (req: Request, res: Response) => {

    const { username, password } = req.body; 

    // check if username is valid: 
    if (!username) {
        return res.status(400).send({ auth: false, message: "Username is required or malformed." });
    }

    // check if password is valid: 
    if (!password) {
        return res.status(400).send({ auth: false, message: "Password is required." }); 
    }

    // check if user existed: 
    const user = await UserModel.findOne({ username: username }).exec();
    if (!user) {
        return res.status(401).send({ auth: false, message: "Unauthorized." });
    }

    // check if the password matches using jwt: 
    const authValid = await comparePasswords(password, user.password); 

    if (!authValid) {
        return res.status(401).send({ auth: false, message: "Unauthorized." });
    }

    // generate jwt: 
    const jwt = generateJWT(user); 

    return res.status(200).send({ auth: true, token: jwt, user: user.toJSON() });
});

// check authentication with JWT token: 
router.get('/verification', 
    requireAuth, 
    async (req: Request, res: Response) => {
        return res.status(200).send({ auth: true, message: 'Authenticated.' });
});

export { router as AuthRouter }