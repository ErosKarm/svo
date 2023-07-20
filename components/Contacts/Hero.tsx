import React from "react";

import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.header}>Contact</h1>

      <Image
        className={styles.heroPath}
        src="./assets/images/contacts/handshakePath.svg"
        height={200}
        width={200}
        alt="hero svg"
      />
      <div className={styles.hero_contact_container}>
        <span className={styles.hero_contact}>+371 25657897</span>
        <span className={styles.hero_contact}>office@svogroup.com</span>
      </div>

      <div className={styles.furtherContacts}>
        <div className={styles.contactInformation}>
          <span className={styles.contactInformationHeader}>
            SIA "S.V.O Group"
          </span>
          <span>
            <strong style={{ fontWeight: "500" }}>Registration number: </strong>
            40200000000
          </span>

          <span className={styles.vatNr}>
            {" "}
            <strong style={{ fontWeight: "500" }}>VAT Number: </strong>
            LV40200000000
          </span>
          <span>
            <strong style={{ fontWeight: "500" }}>Legal Address: </strong>
          </span>
          <span className={styles.legalAddress}>
            {" "}
            Ganibu dambis 24D, Riga, LV-1005, Latvia
          </span>
          <span>
            <strong style={{ fontWeight: "500" }}>Actual Address: </strong>
          </span>
          <span className={styles.legalAddress}>
            {" "}
            Ganibu dambis 24D, Riga, LV-1005, Latvia
          </span>
        </div>
        <div className={styles.contact_actions}>
          <button className={styles.action_btn}>Send Request</button>
          <button className={styles.action_btn}>Subscribe to newsletter</button>
          <button className={styles.action_btn}>Request a call</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
