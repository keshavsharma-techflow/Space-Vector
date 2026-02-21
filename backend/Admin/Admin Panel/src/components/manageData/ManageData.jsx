import styles from "./ManageData.module.css";
import { useEffect, useState } from "react";
import { GetNewsData, GetHeaderData } from "../../getHeaderNewsData.js";
import { callToDeactiveHeader, callToDeactiveNews } from "../../deactiveHeaderNewsData.js";

export default function ManageData({ monitorActiveComponent }) {
  let [headerData, setHeaderData] = useState([]);
  let [newsData, setNewsData] = useState([]);


  function helper01(id){
    console.log("helper01 called");
     callToDeactiveHeader(id)
     .then(() => {
      // 🔥 remove deactivated item from UI
      setHeaderData(prev =>
        prev.filter(item => item._id !== id)
      );
    })
     .catch((err) => console.log(err));

  }
  function helper02(id){
    console.log("helper02 called");
     callToDeactiveNews(id)
     .then(() => {
      console.log("entered");
      setNewsData(prev =>
        prev.filter(item => item._id !== id)
      );
    })
     .catch((err) => console.log(err));

  }

  useEffect(() => {
    GetNewsData()
      .then((res) => {
 
        setNewsData(res);
      })
      .catch((err) => console.log(err));
    GetHeaderData()
      .then((res) => {
   
        setHeaderData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  if (newsData.length === 0 || headerData.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <div className={styles.manageData}>
      <div className={styles.dataContent}>
        <div>
          <h1>List of active content on webpage</h1>{" "}
        </div>
        <br />
        <br />

        <div className={styles.content01}>
          {headerData.map((content) => {
            return (
              <ul className={styles.list} key={content._id}>
                <li style={{ listStyle: "none" }}  >
                  <h3>{content.heading}</h3 >
                </li>
                <li>{content.author}</li>
                <li>{content.category}</li>
                <li>{content.createdAt}</li>
                <br />
                <button onClick={() => {
                  let id = content._id;
                  console.log(id);
                  helper01(id)}
                  }> Remove post</button>
              </ul>
            );
          })}

          <button onClick={() => monitorActiveComponent("header")}>
            Add New Post
          </button>
        </div>
        <br />
        <hr />
        <br />
        <div className={styles.content02}>
          {newsData.map((content) => {
            return (
              <ul className={styles.list} key={content._id}>
                <li style={{ listStyle: "none" }}>
                  <h3>{content.heading}</h3>
                </li>
                <li>{content.author}</li>
                <li>{content.category}</li>
                <li>{content.createdAt}</li>
                <br />
                <button onClick={() => {
                  let id = content._id;
                  console.log(id);
                  helper02(id)}}> Remove post </button>
              </ul>
            );
          })}

          <button onClick={() => monitorActiveComponent("news")}>
            Add New Post
          </button>
        </div>
        <br />
        <hr />
        <br />
      </div>
    </div>
  );
}
