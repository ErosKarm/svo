import React from "react";

import styles from "./AdditionalServices.module.css";
import ButtonLink from "../Link/ButtonLink";

const AdditionalServices = () => {
  return (
    <section className={styles.services}>
      <div className={styles.services_additional}>
        <h2 className={styles.services_heading}>Warehouse services</h2>

        <p className={styles.services_description}>
          Cargo storage often becomes a stumbling block for companies.
          Inconvenient warehouse location, limited product categories, poor work
          schedule.
        </p>
        <p className={styles.services_description}>
          The warehouse of SVO GROUP is located on the territory of the Freeport
          of Riga, which is very convenient for cargo delivered by water. They
          do not need to complete a Transit Declaration.
        </p>
        <p className={styles.services_description}>
          You can receive the service during the working hours of the warehouse,
          but we understand that there are different circumstances. Therefore,
          if a client needs to provide a service outside of working hours, the
          warehouse does not refuse.
        </p>
      </div>

      <div className={styles.services_additional}>
        <h2 className={styles.services_heading}>TRANSPORT SERVICES</h2>

        <p className={styles.services_description}>
          S.V.O. features GROUP are practically limitless! Together with their
          partners we can organize any transportation. Your the cargo can be
          sent to the recipient by air, by sea, by road or the railroad. The
          decision is up to you!
        </p>
      </div>

      <ButtonLink
        bgImage="./assets/images/homepage/circlePath.svg"
        to="/contact"
        bgPos="center"
        className={styles.contact_btn}
        bgSize="100%"
        fontSize={18}
        style={{ padding: "2rem", marginTop: "6rem", zIndex: "99" }}
      >
        CONTACT
      </ButtonLink>
    </section>
  );
};

export default AdditionalServices;
