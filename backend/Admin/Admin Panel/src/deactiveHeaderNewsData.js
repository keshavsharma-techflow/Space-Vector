import axios from 'axios';
  const apiUrl = import.meta.env.VITE_API_URL;

let callToDeactiveHeader = async(id) =>{
    console.log("callToDeactiveHeader");
let res = await axios.patch(`${apiUrl}api/deactiveHeader`,{id},{
    headers: {
      "Content-Type": "application/json",
    },
  });
res.status(200).json({"success":true});

}

let callToDeactiveNews = async(id) =>{
      console.log("callToDeactiveNews");
let res = await axios.patch(`${apiUrl}api/deactiveNews`,{id},{
    headers: {
      "Content-Type": "application/json",
    },
  });
  res.status(200).json({"success":true});

}

export {callToDeactiveHeader,callToDeactiveNews};