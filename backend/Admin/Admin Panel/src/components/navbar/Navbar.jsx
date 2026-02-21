import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react';

export default function Navbar({monitorClick,click}) {

    
  return (
    <div className={styles.navbar}>
      <div className={styles.navComponent}>
       <button onClick={monitorClick}> {click?<CloseIcon style={{fontSize:"35px"}}> </CloseIcon>:<MenuIcon style={{fontSize:"35px"}}></MenuIcon> } </button> 
      </div>
      <div className={`${styles.navComponent} ${styles.heading} `}>
        <h1>Welcome To Admin Page!</h1>
      </div>
    </div>
  );
}
