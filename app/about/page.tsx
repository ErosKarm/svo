import React from "react";
import styles from "./About.module.css";
import Hero from "@/components/About/Hero";
import Values from "@/components/About/Values";
import Features from "@/components/About/Features";

const page = () => {
  return (
    <main>
      <Hero />
      <Values />
      <Features />
    </main>
  );
};

export default page;
