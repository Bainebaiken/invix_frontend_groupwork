import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "../../lib/dateFormat";

function PostRowCardStyleOne({
  datas = { image: "", date: "", title: "" },
  className = "",
}) {
  return (
    <div className={`codex-er-sidebar-latest-post-item ${className || ""}`}>
      <div className="codex-er-thumb">
        <img
          // src={require(`../../assets/images/${datas.image}`).default}
          alt="latest"
        />
      </div>
      <div className="codex-er-content">
        <span>
          <i className="fal fa-calendar-alt"></i> {dateFormat(datas.date)}
        </span>
        <h4 className="codex-er-title line-clump-2">
          <Link to="/details">{datas.title}</Link>
        </h4>
      </div>
    </div>
  );
}

export default PostRowCardStyleOne;
