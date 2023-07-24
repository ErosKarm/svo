import React, { useState } from "react";
import Popup from "../Popup";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/services";
import { Toaster, toast } from "react-hot-toast";

import styles from "./SendRequest.module.css";

type SendRequestProps = {
  isPopupOpen: boolean;
  closePopUp: () => void;
};

const SendRequest = ({ isPopupOpen, closePopUp }: SendRequestProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitContact = async (data: {
    email: string;
    firstName: string;
    message: string;
    phone: string;
  }) => {
    const res = await sendContactForm({
      name: data.firstName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });
    if (res == 0) {
      toast.success("Successful");
      reset();
    } else {
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <Popup isOpen={isPopupOpen} closePopup={closePopUp}>
      <Toaster />
      <div className={styles.form_wrapper}>
        <form
          className={styles.form}
          onSubmit={handleSubmit((data) => {
            submitContact(data);
          })}
        >
          <span className={styles.form_header}>message needs to be here</span>
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
      </div>
    </Popup>
  );
};

export default SendRequest;
