"use client";

import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import styles from "./Popup.module.css";

import { useForm } from "react-hook-form";
import Image from "next/image";
import { sendContactForm } from "@/services";

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
    reset,
  } = useForm();

  const handleClose = () => {
    // setIsClosed(true);
  };

  const [message, setMessage] = useState("Send us a message using the form:");

  const submitContact = async (data) => {
    console.log(data);
    const res = await sendContactForm({
      name: data.firstName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });
    if (res == 0) {
      setMessage("Thank you for your valuable comment!");

      toast.success("Successful");
      reset();
    } else {
      setMessage("Something went wrong! Please try again");
      toast.error("Something went wrong. Try again!");
    }
  };

  if (isOpen === true) {
    return (
      <div className={styles.wrapper}>
        <Toaster />
        <div className={styles.form_wrapper}>
          <form
            className={styles.form}
            onSubmit={handleSubmit((data) => {
              submitContact(data);
            })}
          >
            <span className={styles.form_header}>{message}</span>
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
