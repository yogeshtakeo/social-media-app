import { useState } from "react";
import FloatButton from "../component/FloatButton";
import PostFormComponentModal from "../component/PostFormComponent";
import ToastComponent from "../component/ToastComponent";
import { useLocation } from "react-router";

const LayoutComponent = (props) => {
  const dontShowButtonOn = ["/login", "/register"];
  const location = useLocation();
  console.log(location);
  const [showPostForm, setShowPostForm] = useState(false);

  const onFormClose = () => {
    setShowPostForm(false);
  };

  const onFLoatButtonClick = () => {
    setShowPostForm(true);
  };

  const showButton = (): boolean => {
    if (dontShowButtonOn.includes(location.pathname)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {props.children}
      <ToastComponent />
      {showButton() && (
        <>
          <FloatButton onClick={onFLoatButtonClick} />
          <PostFormComponentModal
            showModal={showPostForm}
            onClose={onFormClose}
          />
        </>
      )}
    </>
  );
};

export default LayoutComponent;
