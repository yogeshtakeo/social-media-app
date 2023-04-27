import React, { Component } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function NavbarComponent() {
  return (
    <div className="w-fill">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://facebook.com/">
          <img
            src="/src/assets/social media.png"
            className="mr-3 h-6 sm:h-9 2xl:flex-auto"
            alt="Social Media Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Social Media
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                Bonnie@socialmedia.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Account Settings</Dropdown.Item>
            <Dropdown.Item>Privacy Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="gap-x-4">
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="ml-10">
            FYP
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="ml-10">
            Explore
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="ml-10">
            Premium
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarComponent;
