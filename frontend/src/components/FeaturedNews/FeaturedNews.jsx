import styles from "./FeaturedNews.module.css";
import PlanetExploration from "../PlanetExploration/PlanetExploration.jsx";
import { Link } from "react-router-dom";


import { useState } from "react";
import NewsSection from "../NewsSection/NewsSection.jsx";


export default function FeaturedNews({display,h1Txt,btnTxt}) {
  let [active, setActive] = useState(null);
  function setCardStyle(id) {
    setActive((prevId) => (prevId != id ? id : null));
  }
  return (
    <div className={styles.featuredNews}>
      <div className={styles.featureHead}>
        <h1 className={styles.title}>{h1Txt}</h1>
        <Link to={"/underDev"} className={styles.btn} >{btnTxt}</Link>
      </div>
      {display == "news" ?  <NewsSection setCardStyle={setCardStyle} active={active}></NewsSection>:<PlanetExploration active={active} setActive={setActive}></PlanetExploration>}



    </div>
  );
}
