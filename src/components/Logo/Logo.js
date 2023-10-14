import React from "react";
import styles from './Logo.module.css'
export const Logo = () => (
  <div>
    <a href="#" className={styles.top-section__logo}>
      <svg className={styles.top-section__logo-svg}>
        <use href="#logo"></use>
      </svg>
    </a>
  </div>
);
