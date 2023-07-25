import React from "react";
import styles from "./Contact.module.css";
import Hero from "@/components/Contacts/Hero";
import ContactPerson from "@/components/Homepage/ContactPerson";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Contacts/Map"), { ssr: false });

const page = () => {
  return (
    <main>
      <Hero />
      <Map />
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

      <h3 className={styles.contact_heading_bottom}>
        Always in touch, your S.V.O. group
      </h3>
    </main>
  );
};

export default page;
