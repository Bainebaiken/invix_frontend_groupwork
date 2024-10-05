import "react-quill/dist/quill.snow.css";
import "./new.scss";
import Sidebar from '../../../components/admin/sidebar/Sidebar';
import Navbar from '../../../components/admin/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React, { useState } from "react";
import ReactQuill from "react-quill";


const New = () => {
  const [user, setUser] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("technology"); // Default category
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const categories = ["Sports", "Technology", "Education", "politics ","entertainment" ]; // Example categories

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setDate(dateValue);
  };

  const handleImageChange = (e) => {
    const imageValue = e.target.value;
    setImage(imageValue);
  };

  const handleUserChange = (e) => {
    const userValue = e.target.value;
    setUser(userValue);
  };

  const handleTitleChange = (e) => {
    const titleValue = e.target.value;
    setTitle(titleValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload file first
    // const formData = new FormData();
    // formData.append("file", file);

    try {

      // Create content data to be sent to /content endpoint
      const contentData = {
        title: title,
        text: text,
        image: image,
        video: "",
        category_id: category,
        user: user, 
        date: date
      };

      const createResponse = await fetch('https://invix-backend-group-work.onrender.com/api/v1/articles/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contentData),
      });

      if (!createResponse.ok) {
        throw new Error('Failed to add content');
      }

      const data = await createResponse.json();
      console.log('Content created successfully:', data);
      
      // Show success message and reset form fields
      setSuccessMessage("Article saved successfully!");
      setUser("");
      setTitle("");
      setDate("");
      setImage("");
      setText("");
      setCategory("technology"); // Reset to default category

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      
    } catch (error) {
      console.error('Error adding content:', error.message);
      // Handle error state, show error message to user, etc.
    }
  };


  return (
    
    <div className="newArticle">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>Add New Article</h1>
        </div>

        <div className="bottom">

          <div className="right">
            <form onSubmit={handleSubmit}>

              <div className="formInput">
                <label>Enter User</label>
                <input type="text" value={user} onChange={handleUserChange} /> {/* Handle user change*/}
              </div>

              <div className="formInput">
                <label>Enter Image Url</label>
                <input type="text" value={image} onChange={handleImageChange} /> {/* Handle image change*/}
              </div>

              <div className="formInput">
                <label>Enter Title</label>
                <input type="text" value={title} onChange={handleTitleChange} /> {/* Handle title change*/}
              </div>

              <div className="formInput">
                <label>Enter Text</label>
                <ReactQuill value={text} onChange={setText} />
              </div>

              <div className="formInput">
                <label>Enter Date</label>
                <input type="text" value={date} onChange={handleDateChange} /> {/* Handle date change*/}
              </div>

              <div className="formInput">
                <label>Choose Category</label>
                <select value={category} onChange={handleCategoryChange}>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
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
