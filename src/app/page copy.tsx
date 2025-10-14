"use client";

import { Arrow } from "@/components/icons/arrow";
import { Arrows } from "@/components/icons/arrows";
import { Download } from "@/components/icons/download";
import { Dzen } from "@/components/icons/dzen";
import { Shadow } from "@/components/icons/shadow";
import { Telegram } from "@/components/icons/telegram";
import { Vk } from "@/components/icons/vk";
import { VkVideo } from "@/components/icons/vkVideo";
import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.section_one}>
        <header className={styles.header}>
          <div className={styles.ctas}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              <Image
                className={styles.logo}
                src="/logo.svg"
                alt="logo icon"
                width={38.6}
                height={36}
              />
              <Image
                aria-hidden
                src="/title.svg"
                alt="title icon"
                width={102}
                height={13}
              />
            </a>
          </div>
          <div className={styles.menu}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.back}
            >
              <Arrow />
              Назад к сайту
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              О приложении
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Возможности
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Общение
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Отзывы
            </a>
          </div>
          <div className={styles.ctas}>
            <div className={styles.animation}>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.secondary} ${styles.gradient}`}
              >
                <Image
                  className={styles.primary_bg}
                  src="/download.svg"
                  alt="download icon"
                  width={48}
                  height={48}
                />
                Download App
                <Arrows />
              </a>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          <div className={`${styles.white_block} ${styles.first}`}>
            <a className={styles.link} href="/">
              Скачать APK <Download />
            </a>
            <div>
              <div className={styles.title}>Ваш помощник</div>
              <div className={styles.desc}>
                в борьбе с ревматическими заболеваниями
              </div>
              <div className={styles.shadow}>
                <Shadow />
              </div>
            </div>
            <div className={styles.ctas}>
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
                Скачать для iOS
                <Image
                  className={styles.logo_hover}
                  src="/download.svg"
                  alt="download icon"
                  width={24}
                  height={24}
                />
              </a>
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
                Скачать для Android
                <Image
                  className={styles.logo_hover}
                  src="/download.svg"
                  alt="download icon"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          <div className={`${styles.white_block} ${styles.second}`}>
            <video preload="auto" muted autoPlay className={styles.video}>
              <source
                src="https://bcdless-s3-api.biocad.ru/shared/revmo/landing/video/Block-1-hero/1080p/Block-1-hero_1080p.webm"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={styles.third}>
            <a
              className={`${styles.white_block} ${styles.small_first}`}
              href="/video"
            >
              <Image src="/video.svg" alt="video" width={48} height={48} />
              смотреть видео о приложении
            </a>
            <div className={`${styles.white_block} ${styles.small_second}`}>
              <Image src="/qr.svg" alt="qr" width={48} height={48} />
              Скачать<br></br> по QR коду
            </div>
          </div>
        </main>
      </div>
      <div className={styles.section_two}>
        <div className={styles.page_white}>
          <div className={styles.shadow2}>
            <div className={styles.title}>Отзывы от врачей и пациентов</div>
            <div className={styles.desc}>на приложение revmo.info app</div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.ctas}>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              <Image
                className={styles.logo}
                src="/logo.svg"
                alt="logo icon"
                width={38.6}
                height={36}
              />
              <Image
                aria-hidden
                src="/title.svg"
                alt="title icon"
                width={102}
                height={13}
              />
            </a>
          </div>
          <div className={styles.flex}>
            <a href="/" target={"_blank"} className={styles.circle}>
              <Vk />
            </a>
            <a href="/" target={"_blank"} className={styles.circle}>
              <Telegram />
            </a>
            <a href="/" target={"_blank"} className={styles.circle}>
              <Dzen />
            </a>
            <a href="/" target={"_blank"} className={styles.circle}>
              <VkVideo />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
