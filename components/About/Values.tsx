import React from "react";

import styles from "./Values.module.css";
import Number from "./Number";
import Image from "next/image";


const Values = () => {
  return (
    <section className={styles.values}>
      <h2>Our values:</h2>

      <div className={styles.values_1}>
        <Number degree="0deg">1</Number>
        <h4 className={styles.values_1_heading}>We don't stand still.</h4>

        <p className={styles.description}>
          It would seem - what can change in the process of transportation? How
          can develop? To find out the answer to this question, we listen to our
          clients. It is important for us to do everything necessary to provide
          the service, which you need. Even if before we did not have such a
          service.
        </p>
      </div>



      <div className={styles.values_2}>
        <div className={styles.values_1}>
          <Number degree="180deg">2</Number>
          <h4 className={styles.values_1_heading}>
            Every client is important to us
          </h4>

          <p className={styles.description}>regardless of its scale.</p>
        </div>
        <div className={styles.values_1}>
          <Number degree="220deg">3</Number>
          <h4 className={styles.values_1_heading}>We are flexible</h4>

          <p className={`${styles.description} ${styles.description_addon}`}>
            We are looking for the most comfortable, individual ways for each of
            our clients.
          </p>
        </div>
      </div>

      <div className={styles.values_important}>
        <Image
          src="./assets/images/homepage/questionmarkPath.svg"
          height={600}
          width={600}
          className={styles.questionmarkPath}
          alt="plane svg"
        />
        <h4 className={styles.values_heading}>The most important</h4>
        <h5 className={styles.values_headingSmall}>
          We work practically without restrictions.
        </h5>
        <p>There is only one "but" - honesty.</p>
        <p>
          So that we can help a person, he must tell us frankly about his
          situation, about the cargo, about circumstances. Even if half the
          cargo is lost, tell us and together we will think how to solve this
          situation.
        </p>
        <p>
          Human relations have not gone anywhere from logistics. We believe in
          it and prove it in practice!
        </p>
      </div>
    </section>
  );
};

export default Values;
