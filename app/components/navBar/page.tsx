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
    <nav className="container mx-auto flex justify-between ">
      <Link href="/" className="py-3">
        WindoFix
      </Link>
      <div className="flex items-center">
        {" "}
        <Link
          href="/"
          className="hover:bg-slate-100 p-3 transition duration-300"
        >
          Home
        </Link>
        <Menu>
          <MenuHandler>
            <Button>Services</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              {" "}
              <Link href="/doors"> Doors</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link href="/exterior-roller-blinds">Exterior Roller Blinds</Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Link
          href="/about-us"
          className="hover:bg-slate-100 p-3 transition duration-300"
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="hover:bg-slate-100 p-3 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
