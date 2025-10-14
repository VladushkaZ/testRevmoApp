import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Reviews from "@/components/Reviews";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.section_one}>
        <Header />
        <Info />
      </div>
      <div className={styles.section_two}>
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}

