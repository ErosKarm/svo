import React from "react";
import styles from "./SubscribeNewsletter.module.css";
import Popup from "../Popup";
import { useForm } from "react-hook-form";
import { sendNewsletterForm } from "@/services";
import { Toaster, toast } from "react-hot-toast";

type SubscribeNewsLetterTypes = {
  isPopupOpen: boolean;
  closePopUp: () => void;
};

const SubscribeNewsletter = ({
  isPopupOpen,
  closePopUp,
}: SubscribeNewsLetterTypes) => {
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
          submitNewsletter(data?.email);
        })}
      >
        <span className={styles.form_header}>
          From time to time we prepare summaries for our regular customers, so
          that they are familiar with changes in legislation and news the world
          of transportation. Send us your email and we&apos;ll add you to the
          list!
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
