import { Modal } from "@/components/Modal";
import styles from "../page.module.css";

const data = await fetch("https://revmo-api.netlify.app/api/main");
const resp = await data.json();

export default function Page() {
  return (
    <Modal>
      <video
        controls
        preload="auto"
        muted
        autoPlay
        className={styles.full_video}
      >
        <source src={resp.sidebar.watch_video.url} type="video/mp4" />
      </video>
    </Modal>
  );
}
