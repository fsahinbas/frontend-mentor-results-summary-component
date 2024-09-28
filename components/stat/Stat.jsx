import React from "react";
import styles from "./stat.module.css";

const Stat = ({ icon, category, score, color }) => {
  return (
    <div className={styles.wrapper} style={{ backgroundColor: color }}>
      <div className={styles.iconWrapper}>
        <img src={icon} className={styles.icon} />
        <p className={styles.category} style={{ color: color }}>
          {category}
        </p>
      </div>
      <p className={styles.score}>
        <span>{score}</span>
        <span> / 100</span>
      </p>
    </div>
  );
};

export default Stat;
