"use client";

import Link from "next/link";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between flex-col md:flex-row text-sm md:text-base items-center">
        <Link href="/" className="py-3 md:w-24 w-16">
          <Image
            src={"/assets/Windofix_Logo.png"}
            alt="Windo Fix Logo"
            width={75}
            height={75}
            priority={true}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <div className="flex items-center ">
          {" "}
          <Link
            href="/"
            className="hover:text-[#65BDDF] p-3 transition duration-300 text-sm md:text-base"
          >
            Home
          </Link>
          <Menu>
            <MenuHandler>
              <Button className="hover:text-[#65BDDF] text-xs md:text-base  text-black font-normal">
                Services
              </Button>
            </MenuHandler>
            <MenuList className="md:mt-[13px] mt-[-3px] outline-none flex flex-col bg-slate-100 text-sm md:text-base">
              <MenuItem className="border-b-2 pb-1 mb-1">
                {" "}
                <Link className="hover:text-[#65BDDF]" href="/windows">
                  Windows
                </Link>
              </MenuItem>
              <MenuItem className="border-b-2 pb-1 mb-1">
                {" "}
                <Link className="hover:text-[#65BDDF]" href="/doors">
                  {" "}
                  Doors
                </Link>
              </MenuItem>
              <MenuItem className="border-b-2 pb-1 mb-1">
                {" "}
                <Link
                  className="hover:text-[#65BDDF]"
                  href="/exterior-roller-blinds"
                >
                  Exterior Roller Blinds
                </Link>
              </MenuItem>
              <MenuItem className="border-b-2 pb-1 mb-1">
                {" "}
                <Link className="hover:text-[#65BDDF]" href="/glass-curtains">
                  Glass Curtains
                </Link>
              </MenuItem>
              <MenuItem className="border-b-2 pb-1 mb-1">
                {" "}
                <Link className="hover:text-[#65BDDF]" href="/interior-blinds">
                  Interior Blinds
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link className="hover:text-[#65BDDF]" href="/mosquito-nets">
                  Mosquito Nets
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Link
            href="/about-us"
            className="hover:text-[#65BDDF] p-3 transition duration-300 text-sm md:text-base"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-[#65BDDF] pr-3 transition duration-300 text-sm md:text-base"
          >
            Contact Us
          </Link>
          <Link href={"https://www.facebook.com/windofix/"} target="blank">
            <AiFillFacebook size={25} className="text-[#3D5A98] mr-2" />
          </Link>
          <Link
            href={"https://www.instagram.com/windofix/?hl=en"}
            target="blank"
          >
            <FaInstagramSquare size={25} className="text-[#FA0074]" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
