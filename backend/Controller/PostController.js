import Mongoose from "mongoose";
import Posts from "../database/Schema/Posts.schema.js";

export const GetAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find({}).populate("postedBy", "-password");
    res
      .status(200)
      .send({ success: true, data: posts, message: "Posts has been Fetched" });
  } catch (e) {
    res.status(500).send({ success: false, data: null, message: e.message });
  }
};

export const PostPosts = async (req, res) => {
  try {
    const { description } = req.body;

    const post = new Posts({
      description,
      time: new Date().toString(),
      like: 0,
      postedBy: new Mongoose.Types.ObjectId(req.user.id),
    });
    await post.save();

    console.log(req.user);

    res
      .status(200)
      .send({ success: true, data: post, message: "Post Has been added." });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, data: null, message: error.message });
  }
};
