import { Router } from "express";
import { GetAllPosts } from "../Controller/PostController.js";
import { add_data } from "../seeders/Posts.js";

const PostRouter = Router();

PostRouter.get("/", GetAllPosts);
PostRouter.get("/seed/posts", add_data);

export default PostRouter;
