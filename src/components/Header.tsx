import Link from "next/link";
import styles from "../app/page.module.css";
import { Arrow } from "./icons/arrow";
import { Arrows } from "./icons/arrows";
import { Download } from "./icons/download";
import Logo from "./Logo";

interface Rout {
  id: number;
  label?: string;
  link: string;
}

const data = await fetch("https://revmo-api.netlify.app/api/navigation");
const resp = await data.json();

const dataBtn = await fetch("https://revmo-api.netlify.app/api/main");
const respBtn = await dataBtn.json();

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.menu}>
        <Link
          href={resp.menu[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.back}
        >
          <Arrow />
          {resp.menu[0].label}
        </Link>
        {resp.menu.slice(1).map((rout: Rout) => (
          <Link
            key={rout.id}
            href={rout.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {rout.label}
          </Link>
        ))}
      </div>
      <div className={styles.ctas}>
        <div className={styles.animation}>
          {respBtn.sidebar.download_app.enabled && (
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.secondary} ${styles.gradient}`}
            >
              <div className={styles.primary_bg}>
                <Download />
              </div>
              {respBtn.sidebar.download_app.label}
              <Arrows />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
