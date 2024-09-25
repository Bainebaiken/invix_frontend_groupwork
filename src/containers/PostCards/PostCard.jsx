import React from "react";
import { Link } from "react-router-dom";
import VideoPopUp from "../../../components/Helpers/VideoPopup";
import useToggle from "../../../Hooks/useToggle";
import dateFormat from "../../../lib/dateFormat";

export default function PostCardStyleOne(props) {
  const {
    children,
    datas = { image: "", category: "", date: "", title: "" },
    className = "",
      video=true
  } = props;
  const [show, setValue] = useToggle(false);
  return (
    <>
      {show && video &&(
        <VideoPopUp
          handler={setValue.toggle}
          videoSrc="//www.youtube.com/embed/EE7NqzhMDms?autoplay=1"
        />
      )}
      <div className={`codex-er-trending-news-list-box ${className || ""}`}>
        <div className="codex-er-thumb" style={{marginBottom:!video?'0':''}}>
          <img
            src={require(`../../assets/im ages/${datas.image}`).default}
            alt=""
          />
          {video && (
              <div className="codex-er-play">
                <a
                    onClick={(e) => setValue.toggle(e)}
                    className="codex-er-video-popup"
                    href="#"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
          )}

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
          <div className="codex-er-trending-news-list-title">
            <h4 className="codex-er-title line-clump-2">
              <Link to="/blog-details-two">{datas.title}</Link>
            </h4>
            {children && children}
          </div>
        </div>
      </div>
    </>
  );
}
