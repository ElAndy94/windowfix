"use client";
import { Menu } from "@headlessui/react";
import React from "react";

export default function Home() {
  return (
    <Menu>
      {/* Render no wrapper, instead pass in a `button` manually. */}
      <Menu.Button as={React.Fragment}>
        <button>More</button>
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        {/* ... */}
      </Menu.Items>
    </Menu>
  );
}
