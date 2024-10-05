import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "../../../lib/dateFormat";

function PostCardStyleHome(props) {
  const {
    datas = { image: "", category: "", date: "", title: "" },
    className = "",
  } = props;

  // Function to handle image source
  const getImageSource = () => {
    // Assuming your Flask API serves images from 'http://localhost:5000/api/v1/content/uploads/'
    // Adjust this base URL according to your Flask server configuration
    const baseUrl = 'https://invix-backend-group-work.onrender.comapi/v1/content/';

    // Check if image path is available
    if (datas.image) {
      // Return the full URL of the image
      return baseUrl + "uploads/" +datas.image.replace(/\/+/g, '/'); // Adjust for Windows path separators
    } else {
      // Return a placeholder image URL or handle missing image case
      return 'https://example.com/default-image.jpg'; // Replace with your default image URL
    }
  };

  return (
    <div className={`codex-er-video-post codex-er-recently-viewed-item ${className || ""}`}>
      <div className="codex-er-latest-news-item">
        <div className="codex-er-thumb">
          <img src={datas.image} alt="" />
        </div>
        <div className="codex-er-content">
          <div className="codex-er-meta-item">
            <div className="codex-er-meta-categories">
              <a href="#">{datas.category}</a>
            </div>
            <div className="codex-er-meta-date">
              <span>
                <i className="fal fa-calendar-alt"></i>
                {dateFormat(datas.date)}
              </span>
            </div>
          </div>
          <h5 className="codex-er-title line-clump-2">
            <Link to="/details">{datas.title}</Link>
          </h5>
          <div className="codex-er-meta-author">
            <span>
              By <span>{datas.user}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCardStyleHome;
