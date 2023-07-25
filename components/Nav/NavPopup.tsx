import React from "react";
import styles from "./NavPopup.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavPopup = ({ handleClose }: { handleClose: () => void }) => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <ul className={styles.nav_list}>
        <li>
          <Link
            href="/"
            onClick={handleClose}
            className={
              pathname === "/"
                ? `${styles.nav_item} ${styles.nav_active}`
                : `${styles.nav_item}`
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={handleClose}
            className={
              pathname === "/about"
                ? `${styles.nav_item} ${styles.nav_active}`
                : `${styles.nav_item}`
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            onClick={handleClose}
            className={
              pathname === "/services"
                ? `${styles.nav_item} ${styles.nav_active}`
                : `${styles.nav_item}`
            }
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/FAQ"
            onClick={handleClose}
            className={
              pathname === "/FAQ"
                ? `${styles.nav_item} ${styles.nav_active}`
                : `${styles.nav_item}`
            }
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            onClick={handleClose}
            className={
              pathname === "/contact"
                ? `${styles.nav_item} ${styles.nav_active}`
                : `${styles.nav_item}`
            }
          >
            Contact
          </Link>
        </li>
      </ul>

      <button onClick={handleClose}>
        <Image
          src="./assets/icons/close-icon.svg"
          width={220}
          height={40}
          className={styles.close_icon}
          alt="burger menu icon"
        />
      </button>
    </div>
  );
};

export default NavPopup;
