import styles from "./LoginPopUp.module.css";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify"
 const apiUrl = import.meta.env.VITE_API_URL;



export default function NewsletterSignup() {

  let[data,setData] = useState({email:"",firstName:"",lastName:"",city:"",zipCode:"",state:"",country:""})

  let onFieldClick = (event) =>{
    let {id,value} = event.target;

  setData((prevData) =>{
     return {...prevData,[id]:value};
  })

  }

  let formSubmit = async(event)=>{
    event.preventDefault();
     let formData = new FormData();
     formData.append("email",data.email );
     formData.append("firstName",data.firstName );
     formData.append("lastName",data.lastName );
     formData.append("city",data.city );
     formData.append("zip",data.zipCode );
     formData.append("state",data.state );
     formData.append("country",data.country );
     
     try{
        toast.success(" Subscribed successfully 🚀");
      console.log(data);
      console.log(formData);
      let res =  axios.post(`${apiUrl}api/signup`,formData);

        setData((prevData) => { return {...prevData,email:"",firstName:"",lastName:"",city:"",zipCode:"",state:"",country:""}});
     }
     catch(err){
          toast.error("-------------- ❌ Something went wrong! in fontend/src/components/LoginPopUp/LoginPopUp.jsx while uploading data (axios error) ❌");
       console.log("AXIOS ERROR FULL:", err);

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
    // Outer container: centers the form on screen
    <div className={styles.pageCenter}>
      {/* Form wrapper: should only take content size */}
      <form className={styles.signupForm} onSubmit={formSubmit}>
        {/* Card-like container for form UI */}
        <div className={styles.formCard}>
          <h2> Space Vector Newsletter Sign Up</h2>

          <p className={styles.description}>
            Stay up-to-date on the latest news from Space Vector—from Earth to the Moon,
            the Solar System and beyond.
          </p>

          {/* Email field */}
          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={data.email} onChange={onFieldClick} />
          </div>

          {/* First name */}
          <div className={styles.formField}>
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" value={data.firstName} onChange={onFieldClick}/>
          </div>

          {/* Last name */}
          <div className={styles.formField}>
            <label htmlFor="lastName" >Last name</label>
            <input type="text" id="lastName" value={data.lastName} onChange={onFieldClick} />
          </div>

          {/* City */}
          <div className={styles.formField}>
            <label htmlFor="city" >City</label>
            <input type="text" id="city" value={data.city} onChange={onFieldClick}/>
          </div>

          {/* Country + State grouped together */}
          <div className={styles.inlineGroup}>
            <div className={styles.formField}>
              <label htmlFor="country">Country</label>
              <select id="country" name="country" value={data.country} onChange={onFieldClick}>
                <option disabled value="">Select a country</option>
                <option value="India">India</option>
                <option value="USA" disabled>USA</option>
                <option value="China" disabled>China</option>
                <option value="Russia" disabled>Russia</option>
              </select>
            </div>

            <div className={styles.formField}>
              <label htmlFor="state">State / Province</label>
              <select id="state" name="state" value={data.state} onChange={onFieldClick}>
                <option disabled value="">Select a state or province</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Delhi">Delhi</option>
                <option value="Andhra Prade">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>

                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>

                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Sikkim">Sikkim</option>

                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttarakhand">Uttarakhand</option>

                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>

          {/* ZIP */}
          <div className={styles.formField}>
            <label htmlFor="zipCode" >ZIP / Postal</label>
            <input type="text" id="zipCode" value={data.zipCode} onChange={onFieldClick}/>
          </div>

          <p className={styles.disclaimer}>
            By submitting this form, you consent to receive marketing emails
            from Space Vector. You can unsubscribe at any time.
          </p>

          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}
