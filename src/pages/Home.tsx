import NavBarComponent from "../component/NavbarComponent";
import PostComponent from "../component/PostComponent";
import SidebarComponent from "../component/SidebarComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/slices/PostSlice";
import { Spinner } from "flowbite-react";
import AuthenticationLayer from "../HOC/AuthenticationLayer";

const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <AuthenticationLayer isLoading={posts.isLoading}>
      {posts.data.map((post, index) => (
        <PostComponent key={index} {...post} />
      ))}
    </AuthenticationLayer>
  );
};

export default Home;
