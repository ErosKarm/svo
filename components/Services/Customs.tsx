import React from "react";

import styles from "./Customs.module.css";

const Customs = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.header}>Customs services</h1>
      <div className={styles.customs_container}>
        <div>
          <h4>EXPORT</h4>
          <p>
            We help to issue export declarations for the export of goods from
            the European Union.
          </p>
        </div>
        <div>
          <h4>TRANSIT</h4>
          <p>
            We help to issue a transit declaration for moving goods in transit
            from the EU warehouse to the border or to another warehouse.
          </p>
        </div>
        <div>
          <h4>IMPORT</h4>
          <p>
            We help to clear the goods that came to the EU from third countries.
            This includes goods that have arrived at the airport or post office
            and are respectively located in the warehouse of the airport or in
            the Latvijas pasts department, as well as goods that have arrived at
            the port and are stored in a container or in one of the port
            warehouses.
          </p>
        </div>
        <div>
          <h4>
            DESTRUCTION OF <br /> GOODS IN CUSTOMS <br /> WAREHOUSE
          </h4>
          <p>
            We help to settle all customs formalities necessary for the
            destruction of goods that are stored for a long time in a customs
            warehouse and which the owner refused.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Customs;
