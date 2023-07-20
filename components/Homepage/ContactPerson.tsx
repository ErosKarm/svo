import Image from "next/image";
import React from "react";
import styles from "./ContactPerson.module.css";

type ContactPersonTypes = {
  image: string;
  name: string;
  job: string;
  phone: string;
  email: string;
};

const ContactPerson = ({
  image,
  name,
  job,
  phone,
  email,
}: ContactPersonTypes) => {
  return (
    <div className={styles.contactperson}>
      <Image
        src={`${image}`}
        alt="image"
        width={140}
        height={140}
        className={styles.image}
      />
      <span className={styles.name}>{name}</span>
      <span className={styles.job}>{job}</span>
      <span className={styles.phone}>+371 {phone}</span>
      <span className={styles.email}>{email}</span>
    </div>
  );
};

export default ContactPerson;
