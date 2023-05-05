import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthenticationLayer from "./HOC/AuthenticationLayer";
import RedirectionLayer from "./HOC/RedirectionLayer";
import LayoutComponent from "./HOC/LayoutLayer";
import Post from "./pages/Post";

function App(): JSX.Element {
  return (
    <LayoutComponent>
      <Routes>
        <Route
          path="/login"
          element={
            <RedirectionLayer>
              <Login />
            </RedirectionLayer>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectionLayer>
              <Register />
            </RedirectionLayer>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </LayoutComponent>
  );
}

export default App;
