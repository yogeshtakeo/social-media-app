import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Toast } from "flowbite-react";
import { useSelector } from 'react-redux';

const ToastComponent = () => {
  const toast = useSelector(state => state.toast)
  
  
  if (toast.message === ""){
    return <></>
  }
  else {
  return toast.error?(
    <Toast className=" fixed -bottom-2 z-50">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
        <ExclamationCircleIcon className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{toast.message}</div>
      <Toast.Toggle />
    </Toast>
  ): (
    <Toast>
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
      <CheckBadgeIcon className="h-5 w-5" />
    </div>
    <div className="ml-3 text-sm font-normal">
      Item moved successfully.
    </div>
    <Toast.Toggle />
  </Toast>
  );
  }
};

export default ToastComponent;