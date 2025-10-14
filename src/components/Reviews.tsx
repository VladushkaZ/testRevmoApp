import styles from "../app/page.module.css";
import Review from "./Review";

interface Review {
  id: number;
  photo?: string;
  name?: string;
  date?: string;
  text: string;
}

const data = await fetch("https://revmo-api.netlify.app/api/slider?count=10");
const resp = await data.json();

export default function Reviews() {
  return (
    <>
      {resp.enabled == true && (
        <div className={styles.page_white}>
          <div className={styles.review}>
            <div className={styles.title}>{resp.title}</div>
            <div className={styles.desc}>{resp.description}</div>
          </div>
          <div className={styles.slider_container}>
            <div className={styles.slider_wrapper}>
              {resp.count === 0 ? (
                <div className={styles.review}>
                  К сожалению, отзывов пока нет
                </div>
              ) : (
                resp.data.map((post: Review) => (
                  <div key={post.id} className={styles.grey_block}>
                    <Review post={post} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
