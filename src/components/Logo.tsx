import styles from "../app/page.module.css";
import Image from "next/image";
import Link from "next/link";

const data = await fetch("https://revmo-api.netlify.app/api/navigation");
const resp = await data.json();

export default function Logo() {
  return (
    <div className={styles.ctas}>
      <Link
        href={resp.logo.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.secondary}
      >
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="logo icon"
          width={39}
          height={36}
        />
        <b>{resp.logo.text}</b>
      </Link>
    </div>
  );
}
