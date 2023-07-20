import React from "react";
import styles from "./Feature.module.css";

const Feature = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h4 className={styles.feature_heading}>{heading}</h4>
      <p className={styles.feature_description}>{children}</p>
    </div>
  );
};

export default Feature;
