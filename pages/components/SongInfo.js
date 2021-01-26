import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../../styles/Listen.module.css";

export default function SongInfo() {
  const { selectedTitle, selectedChannel, selectedCurator, selectedCuratorEmoji} = useContext(
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
        <a href={`https://koodos.com/p/${selectedCurator}`} style={{textDecoration: 'none'}} target="_blank">
          <p className="mb-0" style={{ textAlign: "left", color: "lightgrey" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z" />
              <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z" />
            </svg>
            &nbsp;curated by {selectedCurator} | {selectedCuratorEmoji}
          </p>
        </a>
      </div>
    </div>
  );
}
