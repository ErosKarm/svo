"use client";

import React, { useState } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import NavPopup from "./NavPopup";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          src="./assets/images/logo.svg"
          width={70}
          height={32}
          alt="Logo"
          priority={true}
        />
      </Link>

      <ul className={styles.nav_list}>
        <li>
          <Link
            href="/"
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

      <button
        className={styles.mobile_nav}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>Menu</span>
        <Image
          src="./assets/icons/burger-menu.svg"
          width={20}
          height={20}
          alt="burger menu icon"
        />
      </button>

      {isOpen && <NavPopup handleClose={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Nav;
