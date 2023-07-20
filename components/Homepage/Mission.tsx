import React from "react";
import styles from "./Mission.module.css";
import ButtonLink from "../Link/ButtonLink";
import Image from "next/image";

const Mission = () => {
  return (
    <section className={styles.mission}>
      <span className={styles.mission_header}>Our mission</span>
      <h2>make complex simple</h2>

      <p className={styles.mission_description}>
        SVO Group is a family business and our main goal is to help people send
        and receive goods.{" "}
      </p>

      <ButtonLink
        bgImage="./assets/images/homepage/moreAboutPath.svg"
        to="/services"
        bgPos="center"
        bgSize="100%"
        style={{ padding: "2rem", marginTop: "2rem", zIndex: "99" }}
      >
        MORE ABOUT COMPANY
      </ButtonLink>

      <Image
        src="./assets/images/homepage/planePath.svg"
        height={600}
        width={600}
        className={styles.planePath}
        alt="plane svg"
      />

      <Image
        src="./assets/images/homepage/truckPath.svg"
        height={600}
        width={600}
        className={styles.truckPath}
        alt="plane svg"
      />

      <Image
        src="./assets/images/homepage/handShakePath.svg"
        height={600}
        width={600}
        className={styles.handShake}
        alt="plane svg"
      />
    </section>
  );
};

export default Mission;
