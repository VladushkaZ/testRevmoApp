import Link from "next/link";
import styles from "../app/page.module.css";
import { Arrows } from "./icons/arrows";
import { Download } from "./icons/download";
import Menu from "./Menu";

const data = await fetch("https://revmo-api.netlify.app/api/navigation");
const resp = await data.json();

const dataBtn = await fetch("https://revmo-api.netlify.app/api/main");
const respBtn = await dataBtn.json();

export default function Header() {
  return (
    <header className={styles.header}>
      <Menu options={resp.menu} />
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
