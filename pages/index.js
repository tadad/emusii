import React from "react";
import Link from "next/link";
import KoodosLink from "./components/KoodosLink";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <img src="/emusii_logo.png" alt="emusii" className={styles.logo} />
      <h1 className={styles.homeEmojis}>🤯😘🥳😱😜</h1>
      <div className={styles.instructions} style={{ width: "100%" }}>
        <div className={styles.block}>
          <p style={{ marginBottom: "0" }}>Explore music using</p>
          <p>💫 emojis 💫</p>
        </div>

        <div className={styles.block}>
          <h1 className="homeEmojis">👇👇👇</h1>
        </div>

        <div className={styles.block}>
          <p style={{ marginBottom: "0" }}>in emusii,</p>
          <p>every song has an emoji 🤭</p>
        </div>

        <div className={styles.block}>
          <p style={{ marginBottom: "0" }}>
            normal playlists have two options:
          </p>
          <p>⏮ back and forth ⏭</p>
          <p style={{ fontSize: "70px" }}>🙄🥱😪</p>
        </div>

        <div className={styles.block}>
          <p>but our songs have </p>
          <div className={styles.directionWrapper}>
            <p className={styles.center}>4️⃣</p>
            <p className={styles.up}>⬆️</p>
            <p className={styles.down}>⬇️</p>
            <p className={styles.left}>⬅️</p>
            <p className={styles.right}>➡️</p>
          </div>
          <p>neighbors</p>
          <p style={{ fontSize: "70px" }}>🤩🥳🥰</p>
        </div>
        <div className={styles.block}>
          <p>just tap ☝️ a neighboring emoji 🤪 to pick the next song 🔊</p>
        </div>
        <div className={styles.block}>
          <p>🎧 Ready to start 🎵listening🎵?</p>
        </div>
        <Link href="/select">
          <button type="button" className={styles.startButton}>
            pick an emoji
          </button>
        </Link>
        <KoodosLink />
      </div>
    </>
  );
}
