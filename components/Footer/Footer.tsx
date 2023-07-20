import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src="./assets/images/boatPath.svg"
        height={600}
        width={600}
        className={styles.footerPath}
        alt="plane svg"
      />
      <span>© 2021 S.V.O. Group</span>
      <span>Ganību dambis 24D, Ziemeļu rajons, Rīga, LV-1005, Latvia</span>
      <div className={styles.policies}>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
