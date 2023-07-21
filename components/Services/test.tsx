import React, { useState, useRef } from "react";
import { sendContactForm } from "services";

const Contact = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef();

  return (
    <div className="container max-w-2xl text-center">
      <h1>{"Contact Us"}</h1>
      <div>
        <div>
          {message}
          <span onClick={() => setMessage("")}>&times;</span>
        </div>
        <form ref={formRef} onSubmit={submitContact}>
          <input
            required
            placeholder="Name*"
            type={"text"}
            minLength={3}
            maxLength={25}
          />
          <input required placeholder="Email Address*" type={"email"} />
          <textarea required placeholder="Comment*" rows={5}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
