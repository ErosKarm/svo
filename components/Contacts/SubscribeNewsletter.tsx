import React from "react";

import styles from "./SubscribeNewsletter.module.css";
import Popup from "../Popup";
import { useForm } from "react-hook-form";
import { sendNewsletterForm } from "@/services";
import { Toaster, toast } from "react-hot-toast";

const SubscribeNewsletter = ({ isPopupOpen, closePopUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitNewsletter = async (data: { email: string }) => {
    const res = await sendNewsletterForm({
      email: data.email,
    });
    if (res == 0) {
      toast.success("Successful");
      reset();
    } else {
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <Popup
      isOpen={isPopupOpen}
      closePopup={closePopUp}
      popUpHeight="400px"
      popUpWidth="800px"
    >
      <Toaster />
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => {
          console.log(data);
          submitNewsletter(data);
        })}
      >
        <span className={styles.form_header}>
          {" "}
          Время от времени мы готовим сводки для своих постоянных клиентов,
          чтобы они были знакомы с изменениями в законодательстве и новостями
          мира перевозок. Напишите нам свою почту, и мы добавим вас к адресатам!
        </span>

        <input
          {...register("email", {
            required: true,
          })}
          placeholder="Email"
          className={styles.input}
        />

        <input type="submit" className={styles.input} />
      </form>
    </Popup>
  );
};

export default SubscribeNewsletter;
