import styles from "./AdminLogin.module.css";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify"




export default function AdminLogin({setIsVerified}) {

  let[data,setData] = useState({email:"",password:""})

  let onFieldClick = (event) =>{
    let {id,value} = event.target;

  setData((prevData) =>{
     return {...prevData,[id]:value};
  })

  }

  let formSubmit = async(event)=>{
    event.preventDefault();

     
     try{
       
      console.log(data);

      let res = await axios.post("http://localhost:8080/api/adminlogin",{email:data.email,password:data.password});
      console.log(res,"inside adminlogin.jsx");

        setData((prevData) => { return {...prevData,email:"",password:""}});
        if(res.status == 200){
            console.log("reached");
            setIsVerified(true);
        }

     }
     catch(err){
          toast.error("-------------- ❌ Something went wrong! in fontend/src/components/adminLogin/AdminLogin.jsx while uploading data (axios error) ❌");
       console.log("AXIOS ERROR FULL:", err);
       alert("Invalid credentials");

  if (err.response) {
    // Server responded with a status code (4xx / 5xx)
    console.log("STATUS:", err.response.status);
    console.log("DATA:", err.response.data);
    console.log("HEADERS:", err.response.headers);
  } else if (err.request) {
    // Request was sent but no response
    console.log("NO RESPONSE RECEIVED:", err.request);
  } else {
    // Something else went wrong
    console.log("ERROR MESSAGE:", err.message);
  }

     }

  }
  return (
<div className={styles.pageCenter}>
  <form className={styles.signupForm} onSubmit={formSubmit}>
    <div className={styles.formCard}>
      <h2 className={styles.title}>Admin Login</h2>

      <div className={styles.formField}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={data.email}
          onChange={onFieldClick}
          placeholder="admin@example.com"
        />
      </div>

      <div className={styles.formField}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={data.password}
          onChange={onFieldClick}
          placeholder="••••••••"
        />
      </div>

      <button type="submit" className={styles.submitBtn}>
        Log In
      </button>
    </div>
  </form>
</div>
  );
}
