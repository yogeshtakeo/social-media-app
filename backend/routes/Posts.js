import { Router } from "express";
import { GetAllPosts } from "../Controller/PostController.js";

const PostRouter = Router();

PostRouter.get("/", GetAllPosts);

export default PostRouter;
