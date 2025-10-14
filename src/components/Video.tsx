"use client";

import styles from "../app/page.module.css";
import { useEffect, useState } from "react";

export default function Video({ videoUrl }: { videoUrl: string }) {
  const [scrolled, setScroled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScroled(true);
    });
  }, []);

  return (
    <div
      className={`${styles.white_block} ${styles.second}`}
      onClick={() => setScroled(true)}
    >
      <video
        preload="auto"
        muted
        autoPlay
        className={`${styles.video} ${scrolled ? styles.scrolled : ""}`}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}
