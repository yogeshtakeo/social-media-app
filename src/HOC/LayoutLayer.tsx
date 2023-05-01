import ToastComponent from "../component/ToastComponent";

const LayoutComponent = (props: { children: any }) => {
  return (
    <>
      {props.children}
      <ToastComponent />
    </>
  );
};

export default LayoutComponent;
