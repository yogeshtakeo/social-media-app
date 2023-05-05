import { useParams } from "react-router";
import AuthenticationLayer from "../HOC/AuthenticationLayer";
import { Avatar, Card, Spinner } from "flowbite-react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const params = useParams();
  const posts = useSelector((state) => state.posts.data);
  const [post, setPost] = useState(null);

  const fetchdata = () => {
    const postData = posts.filter((post) => params.id === post._id);
    if (postData.length !== 0) setPost(postData[0]);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return post ? (
    <AuthenticationLayer className="h-full w-full">
      <div className="flex justify-center gap-12 place-items-center w-full">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
          className="flex-2 rounded-r s"
        />
        <div className="w-full flex-1 p-10">
          <div className="flex justify-between place-items-center">
            <div className="flex place-items-center gap-1 ">
              <Avatar
                size="xs"
                rounded
                placeholderInitials={post.postedBy.username[0]}
              />
              <h3 className="text-xs">{post.postedBy.username}</h3>
            </div>
            <p className="text-xs">{new Date(post.time).toDateString()}</p>
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-10">
            {post.name}
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400 mt-10">
            {post.description}
          </p>
        </div>
      </div>
    </AuthenticationLayer>
  ) : (
    <AuthenticationLayer className="grid place-items-center h-full w-full ">
      <div className="text-align-center">
        <h1 className="text-2xl font-bold tracking-tight">No Data Found</h1>
        <Link to="/">Go To Home</Link>
      </div>
    </AuthenticationLayer>
  );
};

export default Post;
