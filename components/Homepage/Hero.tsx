import React from "react";
import styles from "./Hero.module.css";
import ButtonLink from "../Link/ButtonLink";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className={styles.hero_section}>
        <div>
          <h1 className={styles.hero_heading}>
            Human Relations <br /> in Transportation
          </h1>
          <p className={styles.hero_description}>
            SVO Group - experts in the field of customs procedures. We will help
            you send and receive goods. Want to know more?
          </p>
          <ButtonLink
            bgImage="./assets/underlinePath.svg"
            to="/contact"
            fontSize={18}
            bgPos="bottom"
            bgSize="100%"
          >
            Contact us
          </ButtonLink>
        </div>

        <div className={styles.hero_image_container}>
          <Image
            className={styles.hero_image}
            src="./assets/images/homepage/heroPath.svg"
            width={100}
            height={100}
            alt="hero image"
          />
        </div>
      </section>
      <div className={styles.tags}>
        <span>#customs</span>
        <span>#transport</span>
        <span>#warehouse</span>
        <span>#logisticsservices</span>
      </div>
    </>
  );
};

export default Hero;
