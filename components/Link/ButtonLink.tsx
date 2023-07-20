import { url } from "inspector";
import Link from "next/link";
import React from "react";

import styles from "./ButtonLink.module.css";
import test from "../../public/assets/images/homepage/servicesCirclePath.svg";

type ButtonLinkTypes = {
  bgImage?: string;
  to?: string;
  fontSize?: number;
  onClick?: () => void;
  children: React.ReactNode;
  bgPos?: "top" | "left" | "right" | "bottom" | "center";
  bgSize?: string;
  style?: any;
  className?: string;
};

const ButtonLink = ({
  bgImage = "",
  to = "/",
  fontSize = 14,
  onClick,
  children,
  bgPos = "center",
  bgSize = "cover",
  style,
  className,
}: ButtonLinkTypes) => {
  return (
    <Link
      href={to}
      className={`${styles.buttonLink} ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        fontSize: `${fontSize}px`,
        backgroundPosition: `${bgPos}`,
        backgroundSize: `${bgSize}`,
        ...style,
      }}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
