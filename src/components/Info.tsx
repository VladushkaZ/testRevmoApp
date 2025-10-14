import styles from "../app/page.module.css";
import Image from "next/image";
import { Download } from "./icons/download";
import { Shadow } from "./icons/shadow";

const data = await fetch("https://revmo-api.netlify.app/api/main");
const resp = await data.json();

export default function Info() {
  return (
    <main className={styles.main}>
      <div className={`${styles.white_block} ${styles.first}`}>
        {resp.buttons.apk.enabled && (
          <a className={styles.link} href="/">
            {resp.buttons.apk.label} <Download />
          </a>
        )}
        <div>
          <div className={styles.title}>{resp.title}</div>
          <div className={styles.desc}>{resp.subtitle}</div>
          <div className={styles.shadow}>
            <Shadow />
          </div>
        </div>
        <div className={styles.ctas}>
          {resp.buttons.ios.enabled && (
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              <Image
                className={styles.logo_system}
                src="/ios.svg"
                alt="ios"
                width={24}
                height={24}
              />
              {resp.buttons.ios.label}
              <div className={styles.logo_hover}>
                <Download />
              </div>
            </a>
          )}
          {resp.buttons.android.enabled && (
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              <Image
                className={styles.logo_system}
                src="/android.svg"
                alt="android"
                width={24}
                height={24}
              />
              {resp.buttons.android.label}
              <div className={styles.logo_hover}>
                <Download />
              </div>
            </a>
          )}
        </div>
      </div>
      <div className={`${styles.white_block} ${styles.second}`}>
        <video preload="auto" muted autoPlay className={styles.video}>
          <source src={resp.videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className={styles.third}>
        {resp.sidebar.watch_video.enabled && (
          <a
            className={`${styles.white_block} ${styles.small_first}`}
            href="/video"
          >
            <Image src="/video.svg" alt="video" width={48} height={48} />
            {resp.sidebar.watch_video.label}
          </a>
        )}
        {resp.sidebar.qr_code.enabled && (
          <div className={`${styles.white_block} ${styles.small_second}`}>
            <Image src="/qr.svg" alt="qr" width={48} height={48} />
            Скачать<br></br> по QR коду
            <div className={styles.img_wrap}>
              <Image
                src={resp.sidebar.qr_code.url}
                alt="qr"
                width={120}
                height={120}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
