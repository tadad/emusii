/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
import styles from "../../styles/Listen.module.css";

export default function PlayerControls() {
  const {
    selectedEmoji,
    north,
    south,
    east,
    west,
    northKey,
    southKey,
    eastKey,
    westKey,
    setVideoKey,
  } = useContext(AppContext);

  return (
    <>
      <div className={styles.controlWrapper}>
        <div className={styles.emojiWrapper}>
          <h1 className={styles.selectedEmoji}>{selectedEmoji}</h1>
        </div>
        <button
          className={styles.north}
          onClick={() => setVideoKey(northKey, "north")}
        >
          {north}
        </button>
        <button
          className={styles.south}
          onClick={() => setVideoKey(southKey, "south")}
        >
          {south}
        </button>
        <button
          className={styles.east}
          onClick={() => setVideoKey(eastKey, "east")}
        >
          {east}
        </button>
        <button
          className={styles.west}
          onClick={() => setVideoKey(westKey, "west")}
        >
          {west}
        </button>
      </div>
      <Link href="/">
        <button type="button" className={styles.returnHome}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house-door-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
          </svg>
        </button>
      </Link>

      <button type="button" className={styles.addSong}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>
      </button>
    </>
  );
}
