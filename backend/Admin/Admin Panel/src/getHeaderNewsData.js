import axios from 'axios';
  const apiUrl = import.meta.env.VITE_API_URL;

let GetHeaderData= async ()=>{
    let res = await axios.get(`${apiUrl}api/cosmicdata`);
    console.log(res.data);
    return res.data;
}
let GetNewsData = async ()=>{
    let res = await axios.get(`${apiUrl}api/newsdata`);
        console.log(res.data);
    return res.data;
}
export {GetHeaderData,GetNewsData};