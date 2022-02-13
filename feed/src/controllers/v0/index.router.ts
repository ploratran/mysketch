import { Router, Request, Response } from "express";
import { FeedRouter } from "./feed/routes/feed.router";

const router: Router = Router(); 

// router to Feed Router: 
router.use("/home", FeedRouter); 

// root uri for Router: 
router.get("/", async (req: Request, res: Response) => {
    res.send("v0");
})

export { router as IndexRouter };