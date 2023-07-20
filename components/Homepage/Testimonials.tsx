import React from "react";

import styles from "./Testiomonials.module.css";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <span className={styles.testimonial_header}>REVIEWS</span>
      <h2 className={styles.heading}>What do our clients say</h2>

      <div className={styles.testimonial_container}>
        <Testimonial
          name="Aleksejs Skurjats"
          image="/assets/images/homepage/Olga.png"
        >
          I applied for the service of finding a reliable normal supplier,
          ordered a trial batch. Everything arrives in the best possible way,
          there have never been any complaints. The entire team is courteous and
          responsive...
        </Testimonial>
        <Testimonial
          name="Elena Belous"
          image="/assets/images/homepage/Olga.png"
        >
          Great team, everything is on time, thanks for your patience, detailed
          information and clarifications .. and your site is fire!
        </Testimonial>
        <Testimonial name="Olga Buka" image="/assets/images/homepage/Olga.png">
          I applied for the service of finding a reliable normal supplier,
          ordered a trial batch. Everything arrives in the best possible way,
          there have never been any complaints. The entire team is courteous and
          responsive...
        </Testimonial>
      </div>
    </section>
  );
};

export default Testimonials;
