import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBarComponent from "../component/NavbarComponent";
import SidebarComponent from "../component/SidebarComponent";
import { Spinner } from "flowbite-react";

const AuthenticationLayer = (props) => {
  const users = useSelector((state) => state.users);
  const navigation = useNavigate();

  useEffect(() => {
    if (!users.isLoggedin) {
      navigation("/login");
    }
  }, [navigation, users.isLoggedin]);

  return (
    <div className="h-full w-full">
      <NavBarComponent />
      <div className="flex h-full gap-4">
        <SidebarComponent />
        <div
          className={
            " ml-72 mt-16 flex flex-wrap gap-12 overflow-y-auto h-fit " +
            props.className
          }
        >
          {props.isLoading ? <Spinner /> : props.children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayer;
