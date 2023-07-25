import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "@/firebaseConfig";

type sendContactFormTypes = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const sendContactForm = async ({
  name,
  email,
  phone,
  message,
}: sendContactFormTypes) => {
  try {
    const ref = collection(firestore, "contact");
    await addDoc(ref, {
      name,
      email,
      phone,
      message,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

type sendNewsletterFormTypes = {
  email: string;
};

export const sendNewsletterForm = async ({
  email,
}: sendNewsletterFormTypes) => {
  try {
    const ref = collection(firestore, "newsletters");
    await addDoc(ref, {
      email,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
