import React from "react";

function Breadcrumb() {
  return (
    <div className="codex-er-breadcrumb-area">
      <div className=" container">
        <div className="row">
          <div className=" col-lg-12">
            <div className="codex-er-breadcrumb-box">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Pages</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Post Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
