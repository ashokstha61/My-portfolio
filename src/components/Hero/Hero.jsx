import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashok Kumar Shrestha</h1>
        <p className={styles.description}>
          I'm a Software Engineer. I have completed my bachelors degree in
          BSc.CSIT from himalaya college of engineering affiliated with
          Tribhuvan university in 2023. I took trained in Flutter Framework
          Development.
        </p>
        <a href="mailto:ashokstha61@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Ashok Kumar Shrestha"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
