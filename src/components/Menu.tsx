"use client";

import styles from "../app/page.module.css";
import Image from "next/image";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Arrow } from "./icons/arrow";

interface Rout {
  id: number;
  label?: string;
  link: string;
}

export default function Menu({ options }: { options: Rout[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className={styles.flex}>
        <div className={styles.mobile_menu}>
          <div
            className={styles.primary_bg}
            onClick={() => setMenuOpen((prevState) => !prevState)}
          >
            <Image src="/menu.svg" alt="menu" width={24} height={24} />
          </div>
        </div>
        <Logo />
      </div>
      <div className={`${styles.menu} ${menuOpen && styles.menu_open}`}>
        <Link
          href={options[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.back}
        >
          <Arrow />
          {options[0].label}
        </Link>
        {options.slice(1).map((rout: Rout) => (
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
    </>
  );
}
