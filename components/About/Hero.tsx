import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.header}>About company</h1>
      <h3 className={styles.header_text}>
        S.V.O. Group is a family business and our main task is to help people to
        send and receive goods
      </h3>
      <div className={styles.about}>
        <div className={styles.about_container_left}>
          <p>
            S.V.O. Group has been engaged in transportation for 14 years. We can
            boldly call itself an experienced enterprise, which can practically
            any task in logistics. But years and experience do not change our
            concept, our mission and values.
          </p>
          <p>
            Today, our regular customers are 10 companies of various sizes from
            Europe and Russia. And we are equally glad to cooperate with each of
            them.
          </p>
        </div>

        <div className={styles.about_container_right}>
          <p>
            We will take responsibility for logistics processes that you may not
            understand.
          </p>
          <p className={styles.about_notice}>
            We&apos;ll take over everything. We will make the delivery process
            as easy as possible for you. goods, we will explain complex things
            in simple words, without complex terms.
          </p>
        </div>
      </div>

      <h3>Our mission is to make the complex simple</h3>
      <span className={styles.description}>
        Very often, clients in our area are faced with a wall of logistical
        concepts. <br /> We don&apos;t build walls, we show you the path your
        things will take.
      </span>
    </section>
  );
};

export default Hero;
