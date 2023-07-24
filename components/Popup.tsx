"use client";

import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import styles from "./Popup.module.css";

import { useForm } from "react-hook-form";
import Image from "next/image";
import { sendContactForm } from "@/services";

type PopupTypes = {
  isOpen: boolean;
  closePopup: () => void;
  children: React.ReactNode;
  popUpWidth?: string;
  popUpHeight?: string;
};

const Popup = ({
  isOpen,
  closePopup,
  children,
  popUpHeight,
  popUpWidth,
}: PopupTypes) => {
  if (isOpen === true) {
    return (
      <div className={styles.wrapper}>
        <div
          className={styles.close_wrapper}
          style={{ width: `${popUpWidth}`, height: `${popUpHeight}` }}
        >
          {children}
          <button onClick={() => closePopup()} className={styles.close_icon}>
            <Image
              src="./assets/icons/close-icon.svg"
              width={40}
              height={40}
              alt="burger menu icon"
            />
          </button>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Popup;
