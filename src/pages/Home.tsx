import NavBarComponent from "../component/NavbarComponent";
import PostComponent from "../component/PostComponent";
import SidebarComponent from "../component/SidebarComponent";

const Home = (): JSX.Element => {
  return (
    <div className="h-full w-full">
      <NavBarComponent />
      <div className="flex h-full gap-4">
        <SidebarComponent />
        <div className="flex flex-wrap gap-12 overflow-y-scroll h-full">
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
