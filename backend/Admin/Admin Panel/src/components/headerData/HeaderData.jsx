// import styles from "./HeaderData.module.css";

// export default function HeaderData() {
//   return (
//     <div className={styles.headerData}>
//       <form className={styles.headerForm}>
//         <div className={styles.formContent}>
//           <div className={styles.labelFields}>
//             <label htmlFor="img">Upload image</label>
//             <label htmlFor="head">Heading</label>
//             <label htmlFor="des">Heading</label>
//           </div>
//           <div className={styles.inputFields}>
//             <input id="head" type="file" placeholder="Upload"></input>
//             <input   id="head" type="text" placeholder="Enter the heading here" ></input>
//           </div>
//           {/* <div className={styles.formFields}>
//             <textarea
//               id="des"
//               type="text"
//               placeholder="Enter the description here"
//             ></textarea>
//           </div> */}
//         </div>
//       </form>
//     </div>
//   );
// }

// import styles from "./HeaderData.module.css";
// import { useState } from "react";
// import axios from "axios";

// export default function HeaderData() {
//   let [data, setData] = useState({ img: "", head: "", des: "" });
//   function getValue(event) {
//     data[event.target.id] = event.target.value;
//     setData({ ...data });
//   }
//   async function sendFormData(event) {
//     event.preventDefault();
//     let formData = new FormData();
//     formData.append("img-url", data.img);
//     formData.append("heading", data.head);
//     formData.append("description", data.des);
//     console.log("reached");
//     console.log(formData);
//     try {
//       let res = await axios.post("http://localhost:8080/uploadData", formData);
//       console.log(res);
//     } catch (err) {
//       console.log(`axios error ${err}`);
//     }

//     console.log("success");

//     console.log("form submitted successfully");
//   }
//   return (
//     <div className={styles.headerData}>
//       <form className={styles.headerForm} onSubmit={sendFormData}>
//         <div className={styles.center}>
//           <h1>Enter the data </h1>{" "}
//         </div>
//         <div className={styles.formRow}>
//           <label htmlFor="img">Upload image</label>
//           <input
//             id="img"
//             type="file"
//             style={{ padding: "0px" }}
//             onChange={(e) => setData({ ...data, img: e.target.files[0] })}

//           />
//         </div>

//         <div className={styles.formRow}>
//           <label htmlFor="head">Heading</label>
//           <input
//             id="head"
//             type="text"
//             placeholder="Enter the heading here"
//             onChange={getValue}
//             value={data.head}
//           />
//         </div>

//         <div className={styles.formRow}>
//           <label htmlFor="des">Description</label>
//           <textarea
//             id="des"
//             placeholder="Enter the description here"
//             onChange={getValue}
//             value={data.des}
//           ></textarea>
//         </div>
//         <div className={styles.center}>
//           <button type="submit" className={styles.btn}>
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import styles from "./HeaderData.module.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
 const apiUrl = import.meta.env.VITE_API_URL;

export default function HeaderData({monitorActiveComponent}) {
  let [data, setData] = useState({
    img: "",
    head: "",
    author: "",
    category: "",
    para: "",
    des: "",
    isActive:false
  });

  function getValue(event) {
    // ❌ OLD (does not work for file input)
    // data[event.target.id] = event.target.value;

    // ✅ NEW (safe for text fields)
    const { id, value } = event.target;
    setData((prev) => ({ ...prev, [id]: value }));
  }

  async function sendFormData(event) {
    event.preventDefault();

    let formData = new FormData();

    // ❌ OLD (field name mismatch + img was not a File)
    // formData.append("img-url", data.img);

    // ✅ NEW (field name MUST match multer)
    formData.append("img_url", data.img);
    // ✅ same (text fields are fine)
    formData.append("heading", data.head);
    formData.append("description", data.des);
    formData.append("category", data.category);
    formData.append("paragraph", data.para);
    formData.append("author", data.author);
    formData.append("isActive",data.isActive);

    try {
      // ✅ correct (route exists)
      toast.success(" Cosmic Data uploaded successfully 🚀");
      console.log(data);
      let res = await axios.post(`${apiUrl}api/media/header`, formData);
      setData({
        img: "",
        head: "",
        author: "",
        category: "",
        para: "",
        des: "",
        isActive:false
      }); //Reset the data obj

      monitorActiveComponent(null);
    } catch (err) {
      toast.error(
        "-------------- ❌ Something went wrong! in Admin/src/components/AdminPanel/headerData/HeaderData.jsx while sending data through axios ❌",
      );
      console.log("full axios error  ", err);
    }
  }

  return (
    <div className={styles.headerData}>
      <form className={styles.headerForm} onSubmit={sendFormData}>
        <div className={styles.center}>
          <h1>Enter the data</h1>
        </div>

        <hr />

        <div className={styles.formRow}>
          <label htmlFor="img">Upload image</label>

          <input
            id="img"
            type="file"
            style={{ padding: "0px" }}
            // ❌ OLD (file inputs cannot be controlled)
            // value={data.img}

            // ✅ NEW (store File object)
            onChange={(e) =>
              setData((prev) => ({ ...prev, img: e.target.files[0] }))
            }
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor="head">Heading</label>
          <input
            id="head"
            type="text"
            placeholder="Enter the heading here"
            onChange={getValue}
            value={data.head}
          />
        </div>

        

        <div className={styles.formRow}>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            placeholder="Enter the author name here"
            onChange={getValue}
            value={data.author}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            placeholder="Enter the category here"
            onChange={getValue}
            value={data.category}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor="para">Paragraph</label>
          <textarea
            id="para"
            placeholder="Enter the para here"
            onChange={getValue}
            value={data.para}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor="des">Description</label>
          <textarea
            id="des"
            placeholder="Enter the description here"
            onChange={getValue}
            value={data.des}
          />
        </div>

        <div className={styles.formRow}>
          <label>Is the following content active??</label>
          <div className={`${styles.formRow} ${styles.radio}`}>
            <div>
              <input type="radio" id="Yes" name="isActive" onClick={() => setData((oldData)=> {return {...oldData,isActive:true}})}/>
              <label htmlFor="Yes">Yes</label>
            </div>
            <div>
              <input type="radio" id="No" name="isActive" onClick={ ()=>setData((oldData)=> {return {...oldData,isActive:false}})}/>
              <label htmlFor="No">No</label>
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
