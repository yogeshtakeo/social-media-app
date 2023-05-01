import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthenticationLayer from "./HOC/AuthenticationLayer";
import RedirectionLayer from "./HOC/RedirectionLayer";

function App(): JSX.Element {
  return (
    <>
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
        <Route
          path="/"
          element={
            <AuthenticationLayer>
              <Home />
            </AuthenticationLayer>
          }
        />
      </Routes>
    </>
  );
}

export default App;
