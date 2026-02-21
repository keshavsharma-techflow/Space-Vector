import styles from "./Connect.module.css";

import { Link } from "react-router-dom";
export default function Connect(){

    return(
        <div className={styles.connect}>
          <h2 style={{color:"#959599", fontSize: "1.2rem"}} >Follow us</h2>
          <div className={styles.mediaIconsCont}>
            <Link to={"/underDev"} className={styles.btn}>
            <i className="fa-brands fa-facebook" style={{"color":" lightgrey"}}></i>
            </Link>
            <Link to={"/underDev"}>
                <i className="fa-brands fa-instagram" style={{"color":" lightgrey"}} ></i>
                </Link>
                <Link to={"/underDev"}>
                    <i className="fa-brands fa-x-twitter" style={{"color":" lightgrey"}}></i>
                </Link>
                <Link to={"/underDev"}>
                    <i className="fa-brands fa-youtube" style={{"color":" lightgrey"}}></i>
                </Link>
                </div>
          <Link to={"/underDev"} className={styles.para}>More About Space Vector </Link>
          <Link to={"/underDev"} className={styles.para}>Space Vector Newsletters</Link>
        </div>
    )
}
