"use client";

import React, { useState } from "react";

import styles from "./Popup.module.css";

import { useForm } from "react-hook-form";
import Image from "next/image";

const Popup = ({
  isOpen,
  closePopup,
}: {
  isOpen: boolean;
  closePopup: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    // setIsClosed(true);
  };

  if (isOpen === true) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.form_wrapper}>
          <form
            className={styles.form}
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <span className={styles.form_header}>
              Send us a message using the form:
            </span>
            <input
              {...register("firstName", {
                required: true,
              })}
              placeholder="First name, Last name, Company"
              className={styles.input}
            />
            <input
              {...register("email", {
                required: true,
              })}
              placeholder="Email"
              className={styles.input}
            />

            <input
              {...register("phone", {
                required: true,
              })}
              placeholder="Phone number"
              className={styles.input}
            />

            <textarea
              {...register("message", {
                required: true,
              })}
              className={styles.input_description}
            />

            <input type="submit" className={styles.input} />
          </form>
          <button onClick={handleClose}>
            <Image
              src="./assets/icons/close-icon.svg"
              width={220}
              height={40}
              className={styles.close_icon}
              onClick={() => closePopup()}
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
