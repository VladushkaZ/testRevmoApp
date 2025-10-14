"use client";

import { useRouter } from "next/navigation";
import styles from "../app/page.module.css";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className={styles.modal}>
      <div
        onClick={() => {
          router.back();
        }}
        className={`${styles.circle} ${styles.close}`}
      >
        х
      </div>
      {children}
    </div>
  );
}
