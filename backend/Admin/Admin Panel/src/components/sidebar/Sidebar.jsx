import styles from "./Sidebar.module.css";

export default function Sidebar({setClick}) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.contentCon}>
        <div className={styles.heading}> <h1>Upload Manager</h1> </div> 
        <div className={styles.content}>  Headers data</div>
        <div className={styles.content}> News and Events </div>
        <div className={styles.content}> Today's image</div>

      </div>
    </div>
  );
}
