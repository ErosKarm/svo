import React from "react";
import styles from "./Services.module.css";
import Hero from "@/components/Services/Hero";
import Customs from "@/components/Services/Customs";
import Notice from "@/components/Services/Notice";
import AdditionalServices from "@/components/Services/AdditionalServices";

const page = () => {
  return (
    <div>
      <Hero />
      <Customs />
      <Notice />
      <AdditionalServices />
    </div>
  );
};

export default page;
