import React from "react";
import styles from "../../styles/KoodosLink.module.css";

export default function KoodosLink() {
  return (
    <p className={styles.koodosLink}>
      from the&nbsp;
      <a
        href="https://kcollective.substack.com/"
        rel="noreferrer"
        target="_blank"
        style={{ color: "rgb(71, 238, 208)", textDecoration: "none" }}
      >
        Koodos Collective
      </a>
    </p>
  );
}
