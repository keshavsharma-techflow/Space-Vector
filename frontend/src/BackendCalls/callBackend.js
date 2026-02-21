// CallBackend.js
import axios from "axios";
 const apiUrl = import.meta.env.VITE_API_URL;

export async function getCosmicBackendData() {
  try {
    console.log("request to backend");
    console.log(apiUrl);
    const res = await axios.get(`${apiUrl}api/cosmicdata`);
  
    console.log(res.data);
    return res.data; // ✅ return actual data
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getNewsData(){
  try{

  let res = await axios.get(`${apiUrl}api/newsdata`);
  console.log(res.data);
  return res.data;
  }

  catch(err){
    console.log(err);
  }
}

