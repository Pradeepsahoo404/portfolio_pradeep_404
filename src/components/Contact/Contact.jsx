import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import VisitUs from "../VisitUs/VisitUs";
export const Contact = () => {
  return (
    <div>
      <VisitUs/>
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sahoopradeep034@gmail.com">sahoopradeep034@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/pradeep-sahoo-web-developer/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/pradeep-sahoo</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Pradeepsahoo404">github.com/Pradeepsahoo404</a>
        </li>
      </ul>
    </footer>
    </div>
  );
};
