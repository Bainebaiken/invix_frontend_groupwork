import React, { useState } from "react";
import useToggle from "../../../../Hooks/useToggle";
import DropDown from "../../../Helpers/DropDown";
import Navigation from "../../../Helpers/Navigation";
import Search from "../../../Search";
import Logo from "../../../../assets/images/logo.jpg";

function HeaderThree({ drawerAction }) {
  const category1 = ["Auditions", "Saab", "VW", "Audi"];
  const [selectedCategory, setCategory] = useState(category1[0]);
  const changeCategory1 = (value) => {
    setCategory(value);
  };
  const [show, setValue] = useToggle(false);
  return (
    <>
      <Search
        className={`${show ? "open" : ""}`}
        searchAction={setValue.toggle}
      />
      <header className="codex-er-header-area codex-er-header-area-3">
        <div className="codex-er-header-nav">
          <div className=" container-fluid p-0">
            <div className="row">
              <div className=" col-lg-12">
                <div className="navigation">
                  <nav className="navbar navbar-expand-lg">
                    <div className="navbar-brand logo">
                      <a href="/">
                        <img
                          src={
                            Logo
                          }
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className="collapse navbar-collapse sub-menu-bar"
                      id="navbarSupportedContent"
                    >
                      <Navigation className="mr-auto" />
                    </div>
                    <div className="codex-er-navbar-btn d-flex">
                     
                      <div className="codex-er-widget d-flex">
                        <a
                          onClick={(e) => setValue.toggle(e)}
                          className="codex-er-news-search-open"
                          href="#"
                        >
                          <i className="far fa-search"></i>
                        </a>
                      </div>
                      <span
                        onClick={drawerAction}
                        className="codex-er-toggle-btn toggle-btn codex-er-news-canvas_open d-block"
                      >
                        <i className="fal fa-bars"></i>
                      </span>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderThree;
