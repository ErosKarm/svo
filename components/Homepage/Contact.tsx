import React from "react";

import styles from "./Contact.module.css";
import ButtonLink from "../Link/ButtonLink";
import Image from "next/image";
import ContactPerson from "./ContactPerson";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Image
        src="./assets/images/homepage/questionmarkPath.svg"
        height={600}
        width={600}
        className={styles.questionmarkPath}
        alt="plane svg"
      />

      <Image
        src="./assets/images/homepage/questionmarkPathSM.svg"
        height={600}
        width={600}
        className={styles.questionmarkPathSM}
        alt="plane svg"
      />

      <h2>Do you have any questions?</h2>
      <ButtonLink
        bgImage="./assets/images/homepage/writeUsPath.svg"
        to="/contact"
        bgPos="center"
        bgSize="100%"
        style={{ padding: "2rem", zIndex: "99" }}
      >
        WRITE US
      </ButtonLink>
      <ButtonLink
        bgImage="./assets/images/homepage/FAQpath.svg"
        to="/FAQ"
        bgPos="center"
        bgSize="100%"
        style={{ padding: "2rem", marginTop: "-2rem", zIndex: "99" }}
      >
        Visit the FAQ section
      </ButtonLink>
      <span>or ask a question in person using our</span>
      <ButtonLink
        bgImage="./assets/images/homepage/circlePath.svg"
        to="/contact"
        bgPos="center"
        bgSize="100%"
        style={{ padding: "2rem", zIndex: "99" }}
      >
        CONTACT
      </ButtonLink>

      <div className={styles.contact_person}>
        <ContactPerson
          image="/assets/images/homepage/SergeiBig.png"
          name="Sergei Buks"
          job="customs expert"
          phone="25657897"
          email="office@svogroup.com"
        />

        <ContactPerson
          image="/assets/images/homepage/OlgaBig.png"
          name="Olga Buka"
          job="customs expert"
          phone="25657897"
          email="office@svogroup.com"
        />
      </div>

      <h3 className={styles.contact_intouch}>
        Always in touch, your S.V.O. group
      </h3>
    </section>
  );
};

export default Contact;
