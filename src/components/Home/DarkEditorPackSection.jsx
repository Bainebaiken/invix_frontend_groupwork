import React from "react";
import NewsGrid from "../../containers/Home/NewsGrid";
import editorsPackThumb from '../../assets/images/editors-pack-thumb-5.png';


function DarkEditorPackSection({ editorPackSectionDatas }) {
  return (
    <section className="codex-er-editors-pack-white-area codex-er-editors-pack-dark-area">
      <div className=" container">
        <div className="row">
          <div className=" col-lg-12">
            <div className="codex-er-editors-pack-title d-flex justify-content-between align-items-center">
              <h4 className="codex-er-title">Editors Pack</h4>
              <a href="#">View All</a>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-center">
          <div className=" col-lg-9">
            <div className="codex-er-editors-pack-thumb">
              <img
                src={editorsPackThumb}
                alt=""
              />
            </div>
          </div>
          <div className=" col-lg-3">
            <div className="codex-er-editors-pack-content">
              <div className="codex-er-meta-item">
                <div className="codex-er-meta-categories">
                  <a href="#">Technology</a>
                </div>
                <div className="codex-er-meta-date">
                  <span>
                    <i className="fal fa-calendar-alt"></i> 24th February 2024
                  </span>
                </div>
              </div>
              <h4 className="codex-er-title">
                <a href="#">
                  Organizing the world’s information: where does it all
                </a>
              </h4>
              <div className="codex-er-meta-author">
                <div className="codex-er-author">
                  <img src="assets/images/user-2.png" alt="" />
                  <span>
                    By <span>Reporter.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="codex-er-editors-pack-item mt-60">
          <NewsGrid editorPackSectionDatas={editorPackSectionDatas} />
        </div>
      </div>
    </section>
  );
}

export default DarkEditorPackSection;
