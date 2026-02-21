import styles from "./PostContent.module.css";
 const apiUrl = import.meta.env.VITE_API_URL;

export default function PostContent({ obj }) {
  return (
    <div className={styles.postContent}>
      <div className={styles.postData}>
        <h1>{obj.heading}</h1>
        <br />
        <img
          src={`${apiUrl}uploads/${obj.img_url}`}
          alt="img"
          style={{ width: "90%", height: "500px" }}
        ></img>
        <br />
        <br />
        <br />
        <br />
        <p className={styles.articleText}>{obj.description}</p>
      </div>
    </div>
  );
}
