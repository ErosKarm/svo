import React from "react";

import styles from "./Number.module.css";

type NumberTypes = {
  degree: string;
  children: React.ReactNode;
};

const Number = ({ degree = "0deg", children }: NumberTypes) => {
  const inlineStyle = {
    "--rotate-degree": degree, // Set the CSS variable with the degree prop value
  };

  return (
    <span className={styles.values_number} style={inlineStyle}>
      {children}
    </span>
  );
};

export default Number;
