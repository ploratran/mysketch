import { Router, Request, Response } from "express"; 
import { AuthRouter } from "./auth.router";

const router: Router = Router(); 

router.use("/auth", AuthRouter); 

export { router as UserRouter }