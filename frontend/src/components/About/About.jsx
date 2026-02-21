import styles from "./About.module.css"
import { Link } from "react-router-dom"

export default function About(){
return (
    <div className={styles.about}>

        <h2><b>About</b></h2>
        <p>We explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery</p> 
        <Link to={"/underDev"} style={{color:"#fff"}} id={styles.nasaMission}>Space Missions</Link>
        <Link to={"/underDev"} className={styles.btn}>Join Us</Link>

    </div>
)
}