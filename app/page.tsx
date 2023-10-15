"use client";
import { Menu } from "@headlessui/react";
import React from "react";
import Landing from "./components/landing/Page";
import CategoriesPage from "./components/categories/Page";

export default function Home() {
  return (
    <main>
      <Landing />
      <CategoriesPage />
    </main>
  );
}
