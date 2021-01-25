import React, { useContext } from "react";
import YouTube from "react-youtube";
import { AppContext } from "../context/AppContext";
import styles from "../../styles/Listen.module.css";

export default function Player() {
  const { selectedSongKey, playerTransitionType } = useContext(AppContext);

  const opts = {
    height: "400",
    width: "400",
    playerVars: {
      autoplay: 1,
      controls: 0,
      playsinline: 1,
    },
  };

  return (
    <div className={styles.h_iframe}>
      <YouTube
        videoId={selectedSongKey}
        opts={opts}
        className={playerTransitionType}
      />
    </div>
  );
}
