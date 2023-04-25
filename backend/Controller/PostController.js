import Posts from "../database/Schema/Posts.schema.js";

export const GetAllPosts = async (req, res) => {
  try {
    const posts = await Posts.find({});
    res
      .status(500)
      .send({ success: true, data: posts, message: "Posts has been Fetched" });
  } catch (e) {
    res.status(500).send({ success: false, data: null, message: e.message });
  }
};
