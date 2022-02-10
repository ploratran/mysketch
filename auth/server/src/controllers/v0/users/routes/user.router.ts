import { Router, Request, Response } from "express"; 
import { AuthRouter } from "./auth.router";

const router: Router = Router(); 

router.use("/auth", AuthRouter); 

router.get("/", async (req: Request, res: Response) => {
    
});

export { router as UserRouter }