import React from "react";
import Logo from "../../assets/images/logo.jpg";

function Search({ searchAction, className }) {
  return (
    <div className={`codex-er-news-search-box ${className || ""}`}>
      <div className="codex-er-news-search-header">
        <div className="container mt-60">
          <div className="row">
            <div className="col-6">
              <img
                src={Logo}
                alt=""
              />
            </div>
            <div className="col-6">
              <div className="codex-er-news-search-close float-end">
                <button
                  onClick={searchAction}
                  type="button"
                  className="codex-er-news-search-close-btn"
                >
                  Close <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="codex-er-news-search-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="codex-er-news-search-form">
                <form action="#">
                  <input type="text" placeholder="Search for News" />
                  <button type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
