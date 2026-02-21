import styles from "./Navbar.module.css";
import { assets } from "../../assets/asset.js";
import { useState } from "react";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


export default function Navbar() {
  const [active, setActive] = useState("");

  function handleClick(key) {
    setActive(prev => (prev === key ? "" : key));
  }

  return (
    <div className={styles.nav} id="nav">
      <Link to={"/underDev"}
        className={`${styles.line} ${active === "exp" ? styles.border : ""}`}
        onClick={() => handleClick("exp")}
      >
        Explore
      </Link>

      <input
        className={`${styles.input} ${active === "inp" ? styles.border : ""}`}
        onClick={() => handleClick("inp")}
        placeholder="Search"
      />

      <div className={styles.navImg}>
        <img src={assets.logo} alt="NASA logo" />
      </div>

      <Link to="/"
        className={`${styles.line} ${active === "news" ? styles.border : ""}`}
        onClick={() => handleClick("news")}
      >
        Home
      </Link>
        
      <HashLink smooth to="/#n&e" className={`${styles.line} ${active === "mul" ? styles.border : ""}`}
        onClick={() => handleClick("mul")}>
      News & Events
</HashLink>

{/* 
      <Link to="/home#n&e"
        className={`${styles.line} ${active === "mul" ? styles.border : ""}`}
        onClick={() => handleClick("mul")}
      >
      News & Events
      </Link> */}

      <Link to ={"/underDev"}
        className={`${styles.line} ${active === "nasa" ? styles.border : ""}`}
        onClick={() => handleClick("nasa")}
      >
        Space Vector <Button variant="outlined" color="error" size="small"   sx={{fontSize: '0.6rem',padding: '0px 0px',width:"34px",height:"1.2rem",minWidth: '6px',marginBottom:"6px",marginLeft:"2px",color:"white"}}>Live+</Button>
      </Link>

        <a href="#foot"
          className={`${styles.line} ${active === "ref" ? styles.border : ""}`}
          onClick={() => handleClick("ref")}
        >
          Reference
        </a>

    </div>
  );
}
