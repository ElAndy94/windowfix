"use client";
import { Menu } from "@headlessui/react";
import React from "react";
import Landing from "./components/landing/Page";
import CategoriesPage from "./components/categories/Page";
import Services from "./components/services/page";
import ReviewsPage from "./components/reviews/page";
import FooterPage from "./components/footer/page";

export default function Home() {
  return (
    <main>
      <Landing />
      <CategoriesPage />
      <Services />
      <ReviewsPage />
    </main>
  );
}
