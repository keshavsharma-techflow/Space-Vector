import styles from "./PageContent.module.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Page1({arr}){

    return(
        <div className={styles.pageContent}>
            <ul>
              {arr.map((item) => {
                if(item == "Space Vector"){
                    return <li className={styles.item}> {item} <Button variant="outlined" color="error" size="small"   sx={{fontSize: '0.4rem',padding: '0px 0px',width:"30px",height:"1rem",minWidth: '4px',marginBottom:"4px",color:"white", marginLeft:"3px"}} >Live+</Button></li>
                }
                if(item == "Home"){
                    return <HashLink to="/" className={styles.item}>{item}</HashLink>
                }
                if(item == "News & Events"){
                    return <HashLink to="/#n&e" className={styles.item}>{item}</HashLink>
                }
               return <Link to={"/underDev"} className={styles.item}> {item}</Link>
               
               })}

            </ul>
         
            
         
        </div>
    )
}