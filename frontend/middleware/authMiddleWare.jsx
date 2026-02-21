import AdminLogin from "../src/components/AdminLogin/AdminLogin";
import {useState} from 'react';


export default function AuthMiddleWare(){
    const adminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_URL;
   const [isVerified, setIsVerified] = useState(false);

    if(!isVerified){
       return  <AdminLogin setIsVerified={setIsVerified}/>
    }
      // 🚀 REDIRECT to backend-admin app
  window.location.href = `${adminPanelUrl}internal-admin-gateway-7f2m`; // admin panel URL
   

}