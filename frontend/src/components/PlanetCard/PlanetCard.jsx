import styles from "./PlanetCard.module.css";
 const apiUrl = import.meta.env.VITE_API_URL;


export default function PlanetCard({obj,active,setActive,unique_id,navFun}){
 
    return(
        <div  className={`${styles.cardContainer} ${active == unique_id?styles.cardEffect:styles.remCardEffect }`} style={{backgroundImage:`url(${apiUrl}uploads/${obj.img_url})`}} onClick={() => { setActive((prevId) => {if(prevId == unique_id){return -1} return unique_id}), navFun() }}>
            <p>{obj.heading}</p>

        </div>
    )
}
