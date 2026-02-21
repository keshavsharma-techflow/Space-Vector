import styles from "./ContentMeta.module.css"

export default function ContentMeta({obj}){

    return (
        <div className={styles.contentMeta}>
            <div className={styles.metaData}>
                <h3 style={{fontSize:"1.5rem"}}>Space Vector communications</h3>
                <br />
                <br />
                <p>{obj.author}</p>
                <br />
                <p>{obj.createdAt}</p>
                <br />
                <p>{obj.category}</p>
                <br />
            </div>
        </div>
    )
}