import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../../styles/Listen.module.css";

export default function SongInfo() {
  const { selectedTitle, selectedChannel, selectedCurator } = useContext(
    AppContext
  );

  return (
    <div className={styles.infoWrapper}>
      <div className={styles.textWrapper}>
        <h3>
          <b>{selectedTitle}</b>
        </h3>
        <h5 className="mb-0" style={{ color: "lightgrey" }}>
          {selectedChannel}
        </h5>
        <p className="mb-0" style={{ textAlign: "left", color: "lightgrey" }}>
          curated by&nbsp;
          {selectedCurator}
        </p>
      </div>
    </div>
  );
}
