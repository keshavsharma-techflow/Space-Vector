import { Routes,Route } from "react-router-dom"
import styles from "./App.module.css"
import Home from "./page/home/Home"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App(){



  return (
    <div className={styles.app}>
       <ToastContainer />
      <Routes>
        <Route path='/internal-admin-gateway-7f2m' element={<Home/>} ></Route>
       
      </Routes>
        
       

     
    </div>
  )


}