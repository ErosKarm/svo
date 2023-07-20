import React from "react";

import styles from "./QuestionsContainer.module.css";
import ButtonLink from "../Link/ButtonLink";

const QuestionsContainer = () => {
  return (
    <section>
      <div className={styles.answer_container}>
        <p>Customs services </p>
        <div>
          <h4 className={styles.answer_heading}>
            What is needed to clear/clear the goods?
          </h4>
          <div className={styles.answers}>
            <span>You will need a small list of documents:</span>
            <span>1 Invoice for cargo (description of goods)</span>
            <span>2 Power of attorney for a broker</span>
            <span>
              3 Current customs document (air waybill, sea bill of lading,
              document on acceptance to the customs warehouse)
            </span>
          </div>
        </div>

        <div className={styles.answers_further}>
          <h4 className={styles.answer_heading}>
            How to find out how much you will need to pay for customs clearance?
          </h4>
          <div className={styles.answers}>
            <span>
              To calculate the cost of taxes, you need to present invoice for
              goods and specification description.
            </span>
          </div>
        </div>
        <div className={styles.answers_further}>
          <h4 className={styles.answer_heading}>How to order your services?</h4>
          <div className={styles.answers}>
            <span>
              Thank you for your interest in cooperation with SVO GROUP.
            </span>
            <span>
              You can call us, write an e-mail or fill out the feedback form on
              the site.
            </span>
            <span>E-mail: office@svogroup.lv</span>
            <span>Phone numbers: +37122018030, +37126427420</span>
          </div>
        </div>
        <div className={styles.answers_further}>
          <h4 className={styles.answer_heading}>
            What products do you NOT work with?
          </h4>
          <div className={styles.answers}>
            <span>
              We work with all goods, including excise ones. The only exception
              for us is military class goods.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.answer_container}>
        <p>Warehouse services </p>
        <div>
          <h4 className={styles.answer_heading}>
            What kind of goods can you accept in your warehouse?
          </h4>
          <div className={styles.answers}>
            <span>
              The SVO GROUP warehouse accepts all types of goods, except for
              military class cargo and excise goods, which are shipped under the
              EAD (European Excise Declaration.)
            </span>
          </div>
        </div>

        <div className={styles.answers_further}>
          <h4 className={styles.answer_heading}>
            Where is your warehouse located?
          </h4>
          <div className={styles.answers}>
            <span>
              The warehouse of SVO GROUP is located on the territory of the
              Freeport of Riga, which is very convenient for cargo delivered by
              sea. They do not need to complete a Transit Declaration. You can
              receive the service during the working hours of the warehouse, but
              we understand that there are different circumstances. Therefore,
              if a client needs to provide a service outside of working hours,
              the warehouse does not refuse.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.answer_container}>
        <p>Transport services</p>
        <div>
          <h4 className={styles.answer_heading}>
            How long can it take to send the goods?
          </h4>
          <div className={styles.answers}>
            <span>
              We always warn our customers to take care of their shipment in
              advance. You should always consider the timing and be prepared for
              different options for transportation. For example, if the shipment
              comes from the USA, then you can choose air transportation, but it
              is more expensive or sea transportation, but it takes longer.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsContainer;
