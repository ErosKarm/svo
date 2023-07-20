import React from "react";

import styles from "./Testimonial.module.css";
import Image from "next/image";

const Testimonial = ({ name, image, children }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.header}>
        <Image src={`${image}`} width={50} height={50} alt="olga" />
        <h4 className={styles.name}>{name}</h4>
      </div>

      <div className={styles.header}>
        <span></span>
        <p className={styles.testimonial_text}>{children}</p>
      </div>
    </div>
  );
};

export default Testimonial;
