import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Toast } from "flowbite-react";

const ToastComponent = () => {
  return (
    <Toast className=" fixed -bottom-2 z-50">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
        <CheckBadgeIcon className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">Set yourself free.</div>
      <Toast.Toggle />
    </Toast>
  );
};

export default ToastComponent;
