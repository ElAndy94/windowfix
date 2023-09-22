"use client";

import Link from "next/link";
import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const NavBar = () => {
  return (
    <nav className="bg-[#6B6B6B]">
      <div className="container mx-auto flex justify-between text-[#C7C7C7] ">
        <Link href="/" className="py-3">
          WindoFix
        </Link>
        <div className="flex items-center">
          {" "}
          <Link
            href="/"
            className="hover:hover:text-[#FEFEFE] p-3 transition duration-300"
          >
            Home
          </Link>
          <Menu>
            <MenuHandler>
              <Button className="hover:text-[#FEFEFE]">Services</Button>
            </MenuHandler>
            <MenuList className="mt--1 outline-none flex flex-col bg-slate-100">
              <MenuItem className="border-b-2">
                {" "}
                <Link className="hover:text-[#FEFEFE]" href="/doors">
                  {" "}
                  Doors
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link href="/exterior-roller-blinds">
                  Exterior Roller Blinds
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link href="/glass-curtains">Glass Curtains</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link href="/interior-blinds">Interior Blinds</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link href="/mosquito-nets">Mosquito Nets</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link href="/windows">Windows</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Link
            href="/about-us"
            className="hover:text-[#FEFEFE] p-3 transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-[#FEFEFE] p-3 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
