import Posts from "../database/Schema/Posts.schema.js";

const PostsCreator = (count) => ({
  description: "This is the post for the Title " + count,
  time: new Date().toString(),
  like: count,
});

export const add_data = (req, res) => {
  for (let i = 0; i <= 10; i++) {
    let post = PostsCreator(i);
    post = new Posts({ ...post });
    post.save().then((res) => {
      console.log(" data inserted" + i);
    });
  }

  res.send(200);
};
