import Image from "next/image";
import React from "react";

import styles from "./Notice.module.css";
import Number from "../About/Number";

const Notice = () => {
  return (
    <section className={styles.notice}>
      <Image
        src="./assets/images/homepage/questionmarkPath.svg"
        height={600}
        width={600}
        className={styles.questionmarkPath}
        alt="plane svg"
      />
      <h2>Our values:</h2>

      <h3 className={styles.headingSmall}>
        To complete any kind of declaration, you will need:
      </h3>

      <div className={styles.declaration}>
        <div className={styles.declaration_box}>
          <Number degree="0deg">1</Number>
          <h4 className={styles.values_heading}>Invoice</h4>
          <p className={styles.description}>
            It would seem - what can change in the process of transportation?
            How can develop? To find out the answer to this question, we listen
            to our clients. It is important for us to do everything necessary to
            provide the service, which you need. Even if before we did not have
            such a service.
          </p>
        </div>
        <div className={styles.declaration_box}>
          <Number degree="0deg">2</Number>
          <h4 className={styles.values_heading}>Power of attorney</h4>
          <p className={styles.description}>
            Power of attorney for the settlement of customs formalities related
            to the goods (usually issued by the sender of the goods).
          </p>
        </div>
        <div className={styles.declaration_box}>
          <Number degree="0deg">3</Number>
          <h4 className={styles.values_heading}>transport document</h4>
          <p className={styles.description}>
            Transport document (in case of EXPORT - CMR, airway bill of lading,
            bill of lading, railway bill of lading, act of unloading goods / for
            IMPORT, TRANSIT - PUD).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Notice;
