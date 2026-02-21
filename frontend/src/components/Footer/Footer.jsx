
import styles from "./Footer.module.css";
import Summary from "../Summary/Summary";
import logo from "../../assets/logo.png";

export default function Footer(){

    return(
        <div className={styles.Footer} id="foot">
        <div className={styles.footerImg}>
            <div>
            <img src={logo} alt="img" className={styles.img} style={{height:"6rem", widht:"5rem",backgroundColor:"transparent",marginLeft:"30px"}}></img>
            </div>
         
        </div>
        
        <Summary />
         <hr></hr>
        </div>
    )
}
