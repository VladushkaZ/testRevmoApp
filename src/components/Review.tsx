"use client";

import styles from "../app/page.module.css";
import Image from "next/image";
import { useState } from "react";

interface Review {
  id: number;
  photo?: string;
  name?: string;
  date?: string;
  text: string;
}

export default function Review({ post }: any) {
  const [imgNotLoaded, setImgNotLoaded] = useState(false);
  return (
    <>
      <div className={styles.flex_end}>
        <div className={styles.flex}>
          {post.photo && !imgNotLoaded ? (
            <Image
              className={styles.photo}
              src={post.photo}
              onError={(e) => setImgNotLoaded(true)}
              alt="photo"
              width={36}
              height={36}
            />
          ) : (
            <div className={styles.loaded}></div>
          )}
          {post.name}
        </div>
        <div className={styles.flex}>
          <div className={styles.date}>{post.date}</div>
          <Image src={"/calendar.svg"} alt="photo" width={24} height={24} />
        </div>
      </div>
      <div className={styles.white_block}>{post.text}</div>
    </>
  );
}
