import React from "react";

import styles from "./Features.module.css";
import ButtonLink from "../Link/ButtonLink";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.challenges}>
        <h2 className={styles.heading}>New challenges</h2>
        <p>
          Over the course of 14 years, as needed, various options have been
          added to our “range”. One of them deserves special attention - we
          specialize in assistance in the destruction of customs cargo.
        </p>
        <p>
          Это сложная и трудоемкая задача, которая заставляет принимать массу
          неординарных решений, изучать вопрос досконально. И мы делаем это.
        </p>
        <p>
          Все дело в том, что нам не интересно стоять на месте. Нам интересно
          бросать себе вызовы.
        </p>
      </div>

      <div className={styles.challenges}>
        <h2 className={styles.heading2}>What are we moving towards?</h2>
        <p>
          In the current realities, we do not think of any magic. We just doing
          a great job, adapting to new circumstances and find points of growth
          for ourselves.
        </p>
      </div>

      <ButtonLink
        bgImage="./assets/images/homepage/circlePath.svg"
        to="/contact"
        bgPos="center"
        bgSize="100%"
        fontSize={18}
        style={{ padding: "2rem", marginTop: "6rem", zIndex: "99" }}
      >
        CONTACT
      </ButtonLink>
    </section>
  );
};

export default Features;
