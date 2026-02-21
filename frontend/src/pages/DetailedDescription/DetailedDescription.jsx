import styles from "./DetailedDescription.module.css"
import ContentMeta from "../../components/ContentMeta/ContentMeta"
import PostContent from "../../components/PostContent/PostContent"
import { useLocation } from 'react-router-dom';



export default function DetailedDescription(){
    const location = useLocation();
    const {heading,category,description,createdAt,author,img_url } = location.state || {}; // Use a fallback (|| {}) in case state is null
    return (
        <div className={styles.detailDes}>

        <ContentMeta obj={{category,createdAt,author}}/>
        <PostContent obj={{heading,description,img_url}}/>
        </div>
    )
}

   