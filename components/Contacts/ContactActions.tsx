"use client";

import React, { useState } from "react";

import SendRequest from "./SendRequest";

import styles from "./ContactActions.module.css";
import SubscribeNewsletter from "./SubscribeNewsletter";

const ContactActions = () => {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const closeNewsLetterPopup = () => {
    setIsNewsletterOpen(false);
  };

  return (
    <>
      <div className={styles.contact_actions}>
        <button
          className={styles.action_btn}
          onClick={() => setIsRequestOpen((prev) => !prev)}
        >
          Send Request
        </button>
        <button
          className={styles.action_btn}
          onClick={() => setIsNewsletterOpen((prev) => !prev)}
        >
          Subscribe to newsletter
        </button>
        <a href="tel:+1 202-918-2132">
          <button className={styles.action_btn} style={{ width: "100%" }}>
            Request a call
          </button>
        </a>
      </div>
      <SendRequest
        isPopupOpen={isRequestOpen}
        closePopUp={() => setIsRequestOpen(false)}
      />

      <SubscribeNewsletter
        isPopupOpen={isNewsletterOpen}
        closePopUp={() => setIsNewsletterOpen(false)}
      />
    </>
  );
};

export default ContactActions;
