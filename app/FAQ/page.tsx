import React from "react";

import styles from "./FAQ.module.css";
import Hero from "@/components/FAQ/Hero";
import QuestionsContainer from "@/components/FAQ/QuestionsContainer";
import ButtonLink from "@/components/Link/ButtonLink";

const page = () => {
  return (
    <div>
      <Hero />
      <QuestionsContainer />

      <div className={styles.contactButton}>
        <ButtonLink
          bgImage="./assets/images/homepage/circlePath.svg"
          to="/contact"
          bgPos="center"
          bgSize="100%"
          fontSize={18}
          style={{ padding: "2rem", marginTop: "4rem", zIndex: "99" }}
        >
          CONTACT
        </ButtonLink>
      </div>
    </div>
  );
};

export default page;
