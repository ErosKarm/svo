import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "@/firebaseConfig";

export const sendContactForm = async ({ name, email, phone, message }) => {
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

export const sendNewsletterForm = async ({ email }) => {
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
