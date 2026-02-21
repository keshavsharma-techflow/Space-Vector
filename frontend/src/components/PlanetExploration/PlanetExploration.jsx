import styles from "./PlanetExploration.module.css";
import PlanetCard from "../PlanetCard/PlanetCard";
import { useNavigate } from "react-router-dom";
import { planetCardData } from "../../assets/asset.js";

export default function PlanetExploration({ active, setActive }) {
  const navigate = useNavigate();

  const handleClick = (idx) => {
    console.log("clikcedddd");
    navigate("/pageContent", {
      state: planetCardData[idx]
    });
  };

  return (
    <div className={styles.planetCardContainer}>
      <PlanetCard
        obj={planetCardData[0]}
        active={active}
        setActive={setActive}
        unique_id="00"
        navFun={() => handleClick(0)}
      />
      <PlanetCard
        obj={planetCardData[1]}
        active={active}
        setActive={setActive}
        unique_id="11"
        navFun={() => handleClick(1)}
      />
      <PlanetCard
        obj={planetCardData[2]}
        active={active}
        setActive={setActive}
        unique_id="22"
        navFun={() => handleClick(2)}
      />
      <PlanetCard
        obj={planetCardData[3]}
        active={active}
        setActive={setActive}
        unique_id="33"
        navFun={() => handleClick(3)}
      />
    </div>
  );
}
