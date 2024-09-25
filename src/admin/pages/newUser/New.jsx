import "./new.scss";
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import Navbar from '../../../components/admin/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";


const New = () => {
  const [firstname, setFristname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");
  const [biography, setBiography] = useState("");

  const [successMessage, setSuccessMessage] = useState(""); // Success message state


  const handleFristnameChange = (e) => {
    const firstnameValue = e.target.value;
    setFristname(firstnameValue);
  };

  const handleLastnameChange = (e) => {
    const lastnameValue = e.target.value;
    setLastname(lastnameValue);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  const handleUsertypeChange = (e) => {
    const usertypeValue = e.target.value;
    setUsertype(usertypeValue);
  };
  const handleContactChange = (e) => {
    const contactValue = e.target.value;
    setContact(contactValue);
  };

  const handleImageChange = (e) => {
    const imageValue = e.target.value;
    setImage(imageValue);
  };


  const handleBiographyChange = (e) => {
    const biographyValue = e.target.value;
    setBiography(biographyValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload file first
    // const formData = new FormData();
    // formData.append("file", file);

    try {

      // Create content data to be sent to /user endpoint
      const contentData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        image:image,
        contact:contact,
        biography:biography,
        usertype: usertype

      };

      console.log(contentData);

      // if (emil!="admin@gmail.com"){
      //   // redirect the user back to the dashboard
      //   // pass a message telling the user that he aint the admin
      // } else {
      //   // Save the created user to the dashboard
      // };


    //   if (email === "lumalamariam@gmail.com") {
    //     // Allow the user to add a new user
    //     addUserToDashboard();
    // } else {
    //     // Redirect the user or display a message denying access
    //     alert("You do not have permission to add a user.");
    //     // Optionally redirect the user to another page
    //     window.location.href = "/admin/article"; // Redirect to dashboard or any other page
    // }

      const createResponse = await fetch('http://127.0.0.1:5000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contentData),
      });

      if (!createResponse.ok) {
        throw new Error('Failed to add user');
      }

      const data = await createResponse.json();
      console.log('user created successfully:', data);
      
      // Show success message and reset form fields
      setSuccessMessage("Article saved successfully!");
      setFristname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setUsertype("");
      setEmail("");
      setBiography("");
      setContact("");

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      
    } catch (error) {
      console.error('Error adding user:', error.message);
      // Handle error state, show error message to name, etc.
    }
  };


  return (
    
    <div className="newArticle">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>Add New user</h1>
        </div>

        <div className="bottom">

          <div className="right">
            <form onSubmit={handleSubmit}>

              <div className="formInput">
                <label>Enter firstname</label>
                <input type="text" value={firstname} onChange={handleFristnameChange} /> {/* Handle name change*/}
              </div>

              
              <div className="formInput">
                <label>Enter lastname</label>
                <input type="text" value={lastname} onChange={handleLastnameChange} /> {/* Handle slug change*/}
              </div>

              <div className="formInput">
                <label>Enter email</label>
                <input type="text" value={email} onChange={handleEmailChange} /> {/* Handle name change*/}
              </div>

              
              <div className="formInput">
                <label>Enter password</label>
                <input type="number" value={password} onChange={handlePasswordChange} /> {/* Handle slug change*/}
              </div>

              <div className="formInput">
                <label>Enter usertype</label>
                <input type="text" value={usertype} onChange={handleUsertypeChange} /> {/* Handle name change*/}
              </div>

              <div className="formInput">
                <label>Enter image url</label>
                <input type="text" value={image} onChange={handleImageChange} /> {/* Handle name change*/}
              </div>

              
              <div className="formInput">
                <label>Enter biography</label>
                <input type="text" value={biography} onChange={handleBiographyChange} /> {/* Handle slug change*/}
              </div>

              <div className="formInput">
                <label>Enter contact</label>
                <input type="number" value={contact} onChange={handleContactChange} /> {/* Handle name change*/}
              </div>


              
             
              <button type="submit" className="submit-button">ADD</button>

            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </div>
        </div>
      </div>
    </div>

  );


};

export default New;

// const New = ({ inputs=[], title }) => {
//   const [file, setFile] = useState("");

//   return (

//     <div className="new">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />
//         <div className="top">
//           <h1>Add New User</h1>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             <img
//               src={
//                 file
//                   ? URL.createObjectURL(file)
//                   : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//               }
//               alt=""
//             />
//           </div>
//           <div className="right">
//             <form>
//               <div className="formInput">
//                 <label htmlFor="file">
//                   Image: <DriveFolderUploadOutlinedIcon className="icon" />
//                 </label>
//                 <input
//                   type="file"
//                   id="file"
//                   onChange={(e) => setFile(e.target.files[0])}
//                   style={{ display: "none" }}
//                 />
//               </div>
//               <div className="formInput">
//                 <label >First Name</label>
//                 <input type="text" placeholder="Name"/>
//               </div>
//               <div className="formInput">
//                 <label >Last Name</label>
//                 <input type="text" placeholder="Name"/>
//               </div>
//               <div className="formInput">
//                 <label >Email</label>
//                 <input type="email" placeholder="email@domain.com"/>
//               </div>
//               <div className="formInput">
//                 <label >id</label>
//                 <input type="number" placeholder="id number"/>
//               </div>
//               <div className="formInput">
//                 <label >Password</label>
//                 <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"/>
//               </div>
//               <div className="formInput">
//                 <label >Confirm Password</label>
//                 <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"/>
//               </div>
//               <div className="formInput">
//                 <label >user type</label>
//                 <input type="text" placeholder="usertype"/>
//               </div>

//               {/* {inputs.map((input) => (
//                 <div className="formInput" key={input.id}>
//                   <label>{input.label}</label>
//                   <input type={input.type} placeholder={input.placeholder} />
//                 </div>
//               ))} */}
//               <button>Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default New;






// import "react-quill/dist/quill.snow.css";
// import "./new.scss";
// import Sidebar from '../../../components/admin/sidebar/Sidebar';
// import Navbar from '../../../components/admin/navbar/Navbar';
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import React, { useState } from "react";
// import ReactQuill from "react-quill";


// const New = () => {
//   const [user, setUser] = useState("");
//   const [date, setDate] = useState("");
//   const [image, setImage] = useState("");
//   const [title, setTitle] = useState("");
//   const [successMessage, setSuccessMessage] = useState(""); // Success message state


//   const handleDateChange = (e) => {
//     const dateValue = e.target.value;
//     setDate(dateValue);
//   };

//   const handleImageChange = (e) => {
//     const imageValue = e.target.value;
//     setImage(imageValue);
//   };

//   const handleUserChange = (e) => {
//     const userValue = e.target.value;
//     setUser(userValue);
//   };

//   const handleTitleChange = (e) => {
//     const titleValue = e.target.value;
//     setTitle(titleValue);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       // Create content data to be sent to /content endpoint
//       const contentData = {
//         title: title,
//         image: image,
//         user: user, 
//         date: date
//       };

//       const createResponse = await fetch('http://127.0.0.1:5000/api/v1/articles/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(contentData),
//       });

//       if (!createResponse.ok) {
//         throw new Error('Failed to add content');
//       }

//       const data = await createResponse.json();
//       console.log('Content created successfully:', data);
      
//       // Show success message and reset form fields
//       setSuccessMessage("User saved successfully!");
//       setUser("");
//       setTitle("");
//       setDate("");
//       setImage("");

//       // Hide success message after 3 seconds
//       setTimeout(() => {
//         setSuccessMessage("");
//       }, 3000);
      
//     } catch (error) {
//       console.error('Error adding content:', error.message);
//       // Handle error state, show error message to user, etc.
//     }
//   };


//   return (
    
//     <div className="newArticle">
//       <Sidebar />
//       <div className="newContainer">
//         <Navbar />

//         <div className="top">
//           <h1>Add New Article</h1>
//         </div>

//         <div className="bottom">

//           <div className="right">
//             <form onSubmit={handleSubmit}>

//               <div className="formInput">
//                 <label>Enter User</label>
//                 <input type="text" value={user} onChange={handleUserChange} /> {/* Handle user change*/}
//               </div>

//               <div className="formInput">
//                 <label>Enter Image Url</label>
//                 <input type="text" value={image} onChange={handleImageChange} /> {/* Handle image change*/}
//               </div>

//               <div className="formInput">
//                 <label>Enter Title</label>
//                 <input type="text" value={title} onChange={handleTitleChange} /> {/* Handle title change*/}
//               </div>

//               <div className="formInput">
//                 <label>Enter Date</label>
//                 <input type="text" value={date} onChange={handleDateChange} /> {/* Handle date change*/}
//               </div>

              
//               <button type="submit" className="submit-button">Send</button>

//             </form>
//             {successMessage && <p className="success-message">{successMessage}</p>}
//           </div>
//         </div>
//       </div>
//     </div>

//   );


// };

// export default New;
