import HeaderData from "../../components/headerData/HeaderData";
import ManageData from "../../components/manageData/ManageData";
import Navbar from "../../components/navbar/Navbar";
import NewsData from "../../components/newsData/NewsData";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./Home.module.css";
import {useState} from 'react';



export default function Home(){
     let[activeComponent,setActiveComponent] = useState(null);
    function monitorActiveComponent(component){
       setActiveComponent(component);
    }
          let[click,setClick] = useState(false);
          function monitorClick(){
             setClick(!click);
          }
  

    //the manageHeaderData functionality is under development

    return(
        <div className={styles.home}>
             {click?<Sidebar/>:<></> }
             <div className={styles.leftHome}>
                <Navbar click={click} monitorClick={monitorClick}/>
                 {activeComponent === "header" ? (<HeaderData monitorActiveComponent={monitorActiveComponent}/>) : (activeComponent === "news" ? (<NewsData monitorActiveComponent={monitorActiveComponent}/>) : (<ManageData monitorActiveComponent={monitorActiveComponent}/>))}


                {/* <NewsData /> */}
                {/* <HeaderData /> */}
                {/* <ManageData /> */}
             </div>
         
    

        </div>

    )
}