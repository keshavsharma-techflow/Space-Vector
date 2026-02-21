import styles from "./PostContent.module.css";

export default function PostContent({ obj }) {
  return (
    <div className={styles.postContent}>
      <div className={styles.postData}>
        <h1>{obj.heading}</h1>
        <br />
        <img
          src={`http://localhost:8080/uploads/${obj.img_url}`}
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
