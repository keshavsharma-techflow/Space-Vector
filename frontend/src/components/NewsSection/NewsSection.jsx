import styles from "./NewsSection.module.css"

import { Link } from "react-router-dom";
import {useEffect,useState} from 'react';
import { getNewsData } from "../../BackendCalls/callBackend.js";

export default function NewsSection({setCardStyle,active}){
let [info ,setInfo] = useState([]);

useEffect(() =>{
  async function fetchData(){
    let res = await getNewsData();
    console.log("-------",res);
    setInfo(res);
  }
  fetchData()
},[]);

   if(info.length == 0){
    return <div> Loading...</div>
   }
    // style={{ backgroundImage: `url(http://localhost:8080/uploads/${data[idx].img_url})` }}
     console.log("info is -- ",info);
return(

          <div className={styles.newsContentList} id="n&e">
        <Link to="/pageContent" 
        state={info[0]}
          style={{backgroundImage:`url(http://localhost:8080/uploads/${info[0].img_url})`}}
          className={`${styles.newsContent0} ${active == 0 ? styles.cardEffect : styles.remCardEffect}`}
          onClick={() => setCardStyle(0)}
        >
          <p className={styles.textLarge}>{info[0].heading}</p>
        </Link>

         <Link to="/pageContent"
           state={info[1]}
          style={{backgroundImage:`url(http://localhost:8080/uploads/${info[1].img_url})`}}
          className={`${styles.newsContent1} ${active == 1 ? styles.cardEffect : styles.remCardEffect}`}
          onClick={() => setCardStyle(1)}
        >
          <p className={styles.textMedium}>{info[1].heading}</p>
         </Link>

        <div className={styles.groupCon}>
          
          <Link to="/pageContent"
            state={info[2]}
           style={{backgroundImage:`url(http://localhost:8080/uploads/${info[2].img_url})`}}
            className={`${styles.newsContent2} ${active == 2 ? styles.cardEffect : styles.remCardEffect}`}
            onClick={() => setCardStyle(2)}
          >
            <p className={styles.textSmall}>{info[2].heading}</p>
          </Link>

         <Link to="/pageContent"
           state={info[3]}
          style={{backgroundImage:`url(http://localhost:8080/uploads/${info[3].img_url})`}}
            className={`${styles.newsContent3} ${active == 3 ? styles.cardEffect : styles.remCardEffect}`}
            onClick={() => setCardStyle(3)}
          >
            <p className={styles.textSmall}>{info[3].heading}</p>
          </Link>
        </div>
      </div>
)


// return(
//           <div className={styles.newsContentList} id="n&e">
//         <Link to="/pageContent" 
//           className={`${styles.newsContent0} ${active == 0 ? styles.cardEffect : styles.remCardEffect}`}
//           onClick={() => setCardStyle(0)}
//         >
//           <p className={styles.textLarge}>{news[0].con}</p>
//         </Link>

//          <Link to="/pageContent"
//           className={`${styles.newsContent1} ${active == 1 ? styles.cardEffect : styles.remCardEffect}`}
//           onClick={() => setCardStyle(1)}
//         >
//           <p className={styles.textMedium}>{news[1].con}</p>
//          </Link>

//         <div className={styles.groupCon}>
//           <Link to="/pageContent"
//             className={`${styles.newsContent2} ${active == 2 ? styles.cardEffect : styles.remCardEffect}`}
//             onClick={() => setCardStyle(2)}
//           >
//             <p className={styles.textSmall}>{news[2].con}</p>
//           </Link>

//          <Link to="/pageContent"
//             className={`${styles.newsContent3} ${active == 3 ? styles.cardEffect : styles.remCardEffect}`}
//             onClick={() => setCardStyle(3)}
//           >
//             <p className={styles.textSmall}>{news[3].con}</p>
//           </Link>
//         </div>
//       </div>
// )
}
