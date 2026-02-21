import styles from "./Header.module.css";
import { img, headerData } from "../../assets/asset";
import { conData } from "../../context/Context.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCosmicBackendData } from "../../BackendCalls/callBackend.js";


// img_url,
//     heading,
//     author,
//     category,
//     description,
//     paragraph,
//     isActive,

export default function Header({ idx, img_name }) {
    const [data, setData] = useState([]);


   

if(idx == 2){
  return (
    <div
      className={styles.header}
      style={{ backgroundImage: `URL(${img[0][img_name]})` }}
    >

      <div className={styles.headerContent}>
        <h3 className={styles.subTitle}>{headerData[idx].h3}</h3>
     

        <div>
        
          <h1 className={styles.title}>{headerData[idx].h11}</h1>
          <h1 className={styles.title}>{headerData[idx].h12}</h1>
        </div>

        <div className={styles.description}>
             <p>{headerData[idx].p11}</p>
            <p>{headerData[idx].p12}</p>
          <p>{headerData[idx].p13}</p> 
        </div>

        {/*  The signup functionality is under development  as we have to create an new window to add this functionality*/}

    
          <Link to="/signup" className={styles.button}>
           Sign Up
          </Link>
       


      </div>

      <hr className={styles.divider} />
    </div>
  );
}


















else{


  
   useEffect(() => {
    async function fetchData() {
      const result = await getCosmicBackendData();                                         
      console.log(" new data  is ",result);
      setData(result);
    }

    fetchData();
  }, []);








      if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    // <div
    //   className={styles.header}
    //   style={{ backgroundImage: `URL(${img[0][img_name]})` }}
    // >
    // <div
    //   className={styles.header}
    //   style={{ backgroundImage: `URL(${img[0][img_name]})` }}
    // >
    <div
      className={styles.header}
      style={{ backgroundImage: `url(http://localhost:8080/uploads/${data[idx].img_url})` }}
    >
      <div className={styles.headerContent}>
        {/* <h3 className={styles.subTitle}>{headerData[idx].h3}</h3> */}
        {/* <h3 className={styles.subTitle}>{data[0].heading}</h3> */}

        <div>
          <h1 className={styles.title}> {data[idx].heading}</h1>
          {/* <h1 className={styles.title}>{headerData[idx].h11}</h1> */}
          {/* <h1 className={styles.title}>{headerData[idx].h12}</h1> */}
        </div>

        <div className={styles.description}>
          <p>{data[idx].paragraph}</p>
          {/* <p>{`${headerData[idx].p11} ${headerData[idx].p12}`}</p> */}
          {/* <p>{headerData[idx].p12}</p>
          <p>{headerData[idx].p13}</p> */}
        </div>

        {/*  The signup functionality is under development  as we have to create an new window to add this functionality*/}


          <Link to="/pageContent" className={styles.button} state={data[idx]}>
           Learn More
          </Link>
        


      </div>

      <hr className={styles.divider} />
    </div>
  );
}

}