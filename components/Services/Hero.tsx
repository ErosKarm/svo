import React from "react";

import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.header}>Services</h1>
            <h3 className={styles.header_text}>
                We solve your logistics, transport, customs <br/> and warehouse tasks
            </h3>
            
            <div className={styles.tags}>
                <span>#Customs services</span>
                <span>#Warehouse services </span>
                <span>#TRANSPORT SERVICES</span>
            </div>

            <Image
                className={styles.heroPath}
                src="./assets/images/services/servicesHeroPath.svg"
                height={200}
                width={200}
                alt="hero svg"
            />
        </section>
    );
};

export default Hero;
