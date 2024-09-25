import React, { useState } from "react";
import { Link } from "react-router-dom";

function Drawer({ navigationData, action, drawer, drawerPosition }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState();
  const handler = (e, value) => {
    // e.preventDefault();
    const getItems = document.querySelectorAll(`#${value} li`).length;
    if (value !== item) {
      setSize(`${47 * getItems}px`);
      setItem(value);
    } else {
      setItem("");
      setSize("0px");
    }
  };
  return (
    <>
      <div
        onClick={(e) => action(e)}
        className={`codex-er-news-off_canvars_overlay  ${
          drawer ? "codex-er-news-active" : ""
        }`}
      ></div>
      <div className={`codex-er-news-offcanvas_menu ${drawerPosition || ""}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`codex-er-news-offcanvas_menu_wrapper overflow-style-none ${
                  drawer ? "codex-er-news-active" : ""
                }`}
              >
                <div
                  onClick={(e) => action(e)}
                  className="codex-er-news-canvas_close"
                >
                  <a href="#">
                    <i className="fal fa-times"></i>
                  </a>
                </div>
                <div className="codex-er-news-header-social">
                  <ul className="text-center">
                    <li>
                      <a href="#">facebook</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Skype</a>
                    </li>
                  </ul>
                </div>
                <div id="menu" className="text-left ">
                  <ul className="codex-er-news-offcanvas_main_menu">
                    {navigationData &&
                      navigationData.length > 0 &&
                      navigationData.map((menuItem) => (
                        <li
                          key={Math.random() + menuItem.id}
                          onClick={(e) => handler(e, menuItem.title)}
                          className="codex-er-news-menu-item-has-children codex-er-news-active"
                        >
                          <a>{menuItem.title}</a>
                          <ul
                            id={menuItem.title}
                            className="codex-er-news-sub-menu overflow-hidden"
                            style={{
                              height:
                                item === menuItem.title ? itemSize : "0px",
                            }}
                          >
                            {menuItem.submenu &&
                              menuItem.items.map((submenu) => (
                                <li key={Math.random() + submenu.id}>
                                  <Link to={submenu.link}>{submenu.title}</Link>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
