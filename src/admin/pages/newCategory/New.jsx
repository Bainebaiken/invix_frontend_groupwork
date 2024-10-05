// import "./new.scss";
// import Sidebar from '../../../components/admin/sidebar/Sidebar';
// import Navbar from '../../../components/admin/navbar/Navbar';
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";

// const New = ({ inputs=[], title }) => {
//   const [file, setFile] = useState("");

//   return (

//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>Add New Category</h1>
//         </div>
//         <div className="bottom">
          
//           <div className="right">
//             <form>
              
//               <div className="formInput">
//                 <label >Name</label>
//                 <input type="text" placeholder="Name"/>
//               </div>
//               <div className="formInput">
//                 <label >Slug</label>
//                 <input type="text" placeholder="Name"/>
//               </div>
              
//               <button>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default New;










import "react-quill/dist/quill.snow.css";
import "./new.scss";
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import Navbar from '../../../components/admin/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React, { useState } from "react";
import ReactQuill from "react-quill";

const New = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Success message state


  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
  };

  const handleSlugChange = (e) => {
    const slugValue = e.target.value;
    setSlug(slugValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload file first
    // const formData = new FormData();
    // formData.append("file", file);

    try {

      // Create content data to be sent to /category endpoint
      const contentData = {
        slug: slug,
        name: name
      };

      const createResponse = await fetch('https://invix-backend-group-work.onrender.com//api/v1/categories/create_category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contentData),
      });

      if (!createResponse.ok) {
        throw new Error('Failed to add category');
      }

      const data = await createResponse.json();
      console.log('Category created successfully:', data);
      
      // Show success message and reset form fields
      setSuccessMessage("category saved successfully!");
      setName("");
      setSlug("");
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      
    } catch (error) {
      console.error('Error adding category:', error.message);
      // Handle error state, show error message to name, etc.
    }
  };


  return (
    
    <div className="newArticle">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>Add New Category</h1>
        </div>

        <div className="bottom">

          <div className="right">
            <form onSubmit={handleSubmit}>

              <div className="formInput">
                <label>Enter Name</label>
                <input type="text" value={name} onChange={handleNameChange} /> {/* Handle name change*/}
              </div>

              
              <div className="formInput">
                <label>Enter Slug</label>
                <input type="text" value={slug} onChange={handleSlugChange} /> {/* Handle slug change*/}
              </div>

              <button type="submit" className="submit-button">Send</button>

            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </div>
        </div>
      </div>
    </div>

  );


};

export default New;
