import styles from "./Summary.module.css";
import About from "../About/About";
import Pages from "../Pages/Pages";
import Connect from "../Connect/Connect";
export default function Summary(){
return (
    <div className={styles.summary}>
        <About />
         <Pages />
         <Connect/>
    </div>
)
}