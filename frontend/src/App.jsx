
import Navbar from "./components/navbar/Navbar.jsx"
import './App.css'
import {Routes,Route} from 'react-router-dom';
import  Home from "./pages/Home/Home.jsx";
import {conData} from "./context/Context.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp.jsx";
import { useContext } from "react";
import Footer from "./components/Footer/Footer.jsx"
import DetailedDescription from "./pages/DetailedDescription/DetailedDescription.jsx";
import { ToastContainer } from "react-toastify";
import AuthMiddleWare from "../middleware/authMiddleWare.jsx";
import UnderDevelopment from "./components/UnderDevelopment/UnderDevelopment.jsx";



function App() {
let obj = useContext(conData);
  

  return (
    <>


      <div className="app">
     <Navbar />
     <ToastContainer />
     <Routes>
      <Route path="/signup" element={<LoginPopUp /> }/>
      <Route path="/" element={<Home />} />
      <Route path='/pageContent' element={<DetailedDescription />} />
      <Route path='/admin' element={<AuthMiddleWare />} />
      <Route path='/underDev' element={<UnderDevelopment />} />
      
     </Routes>
     <Footer />
 
    </div>
    </>

    
  )
}

export default App
