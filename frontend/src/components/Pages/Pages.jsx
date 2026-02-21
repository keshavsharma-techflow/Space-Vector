import styles from "./Pages.module.css";
import PageContent from "./PageContent/PageContent";


export default function Pages(){

    return(
        <div className={styles.pages}>
           <PageContent arr={["Home","News & Events","Multimedia","Space Vector","Missions"]}/>
           <PageContent arr={["Humans in Space","Earth","The Solar System","The Universe","Science"]}/>
           <PageContent arr={["Aeronautics","Technology","Learning Resources","About Space Vector","Space Vector and Espanol"]}/>
        </div>
    
    )
}