import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroImage from "../../../assets/hero/heroImage-photoaidcom-cropped.jpg"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pradeep</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 year of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="A visual representation of Pradeep"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
