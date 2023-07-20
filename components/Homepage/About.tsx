import React from "react";
import styles from "./About.module.css";
import ButtonLink from "../Link/ButtonLink";
import Feature from "./Feature";
import Image from "next/image";

const About = () => {
  return (
    <section className={styles.about}>
      <h3>
        We solve your logistics, transport, customs and <br /> warehouse tasks
      </h3>
      <span className={styles.about_description}>We will help:</span>

      <div className={styles.features}>
        <Feature heading="IMPORT EXPORT">
          clear your goods or issue export declarations for the export of goods
          from the EU
        </Feature>
        <Feature heading="TRANSIT">
          issue transit declarations for the movement of your goods in transit
        </Feature>
        <Feature heading="DISPOSAL">
          if necessary destroy for you goods in customs status
        </Feature>
        <Feature heading="STOCK">
          unload, reload, upload, sort and keep safe at the customs warehouse
        </Feature>
        <Feature heading="SHIPPING">
          deliver your goods by road, rail, air and/or sea
        </Feature>

        <Image
          className={styles.servicesPath}
          src="./assets/images/homepage/servicesPath.svg"
          width={100}
          height={100}
          alt="svg"
        />
      </div>

      <ButtonLink
        bgImage="./assets/images/homepage/circlePath.svg"
        to="/services"
        bgPos="center"
        bgSize="100%"
        className={styles.about_btn}
        style={{ padding: "2rem", marginTop: "10rem", zIndex: "99" }}
      >
        MORE ABOUT SERVICES
      </ButtonLink>

      <Image
        src="./assets/images/homepage/forkliftPath.svg"
        height={600}
        width={600}
        className={styles.forklift}
        alt="forklift svg"
      />
    </section>
  );
};

export default About;
