import { Dzen } from "@/components/icons/dzen";
import { Telegram } from "@/components/icons/telegram";
import { Vk } from "@/components/icons/vk";
import { VkVideo } from "@/components/icons/vkVideo";
import Link from "next/link";
import styles from "../app/page.module.css";
import Logo from "./Logo";

const data = await fetch("https://revmo-api.netlify.app/api/main");
const resp = await data.json();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.flex}>
        {resp.socials.vk.enabled && (
          <Link
            href={resp.socials.vk.url}
            target={"_blank"}
            className={styles.circle}
          >
            <Vk />
          </Link>
        )}
        {resp.socials.telegram.enabled && (
          <Link
            href={resp.socials.telegram.url}
            target={"_blank"}
            className={styles.circle}
          >
            <Telegram />
          </Link>
        )}
        {resp.socials.dzen.enabled && (
          <Link
            href={resp.socials.dzen.url}
            target={"_blank"}
            className={styles.circle}
          >
            <Dzen />
          </Link>
        )}
        {resp.socials.vkVideo.enabled && (
          <Link
            href={resp.socials.vkVideo.url}
            target={"_blank"}
            className={styles.circle}
          >
            <VkVideo />
          </Link>
        )}
      </div>
    </footer>
  );
}
