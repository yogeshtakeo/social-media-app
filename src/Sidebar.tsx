import React, { Component } from "react";
import { Sidebar } from "flowbite-react";
import {
  EnvelopeIcon,
  UsersIcon,
  BellAlertIcon,
  ArrowRightCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";

function SidebarComponent() {
  return (
    <div className="h-screen flex">
      <Sidebar
        aria-label="Default sidebar example"
        className="bg-gray-800 w-64"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={EnvelopeIcon} className="mb-10">
              <span className="ml-2">Inbox</span>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={UsersIcon} className="mb-10">
              <span className="ml-2">Friends</span>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BellAlertIcon} className="mb-10">
              <span className="ml-2">Notifications</span>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={ArrowRightCircleIcon}
              className="mb-10"
            >
              <span className="ml-2">Sign In</span>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={ArrowUpCircleIcon} className="mb-10">
              <span className="ml-2">Sign Up</span>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SidebarComponent;
