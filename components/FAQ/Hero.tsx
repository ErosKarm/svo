import React from "react";

import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="./assets/images/homepage/questionmarkPath.svg"
        height={600}
        width={600}
        className={styles.questionmarkPath}
        alt="plane svg"
      />

      <Image
        src="./assets/images/homepage/questionmarkPath.svg"
        height={600}
        width={600}
        className={styles.questionmarkPath2}
        alt="plane svg"
      />
      <div className={styles.tags_2}>
        <span>#Customs services</span>
        <span>#Warehouse services </span>
        <span>#TRANSPORT SERVICES</span>
      </div>
      <h1 className={styles.header}>FAQs</h1>

      <div className={styles.tags}>
        <span>#Customs services</span>
        <span>#Warehouse services </span>
        <span>#TRANSPORT SERVICES</span>
      </div>
    </section>
  );
};

export default Hero;
