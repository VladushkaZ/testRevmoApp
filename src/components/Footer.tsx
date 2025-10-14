import { Dzen } from "@/components/icons/dzen";
import { Telegram } from "@/components/icons/telegram";
import { Vk } from "@/components/icons/vk";
import { VkVideo } from "@/components/icons/vkVideo";
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
          <a
            href={resp.socials.vk.url}
            target={"_blank"}
            className={styles.circle}
          >
            <Vk />
          </a>
        )}
        {resp.socials.telegram.enabled && (
          <a
            href={resp.socials.telegram.url}
            target={"_blank"}
            className={styles.circle}
          >
            <Telegram />
          </a>
        )}
        {resp.socials.dzen.enabled && (
          <a
            href={resp.socials.dzen.url}
            target={"_blank"}
            className={styles.circle}
          >
            <Dzen />
          </a>
        )}
        {resp.socials.vkVideo.enabled && (
          <a
            href={resp.socials.vkVideo.url}
            target={"_blank"}
            className={styles.circle}
          >
            <VkVideo />
          </a>
        )}
      </div>
    </footer>
  );
}
