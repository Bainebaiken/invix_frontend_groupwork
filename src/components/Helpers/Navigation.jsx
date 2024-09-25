import React from "react";
import { Link } from "react-router-dom";
import navigationContext from "../../contexts/navigationsContext";

const Navigation = ({ className }) => (
  <>
    <navigationContext.Consumer>
      {({ navigationData }) =>
        navigationData &&
        navigationData.length > 0 && (
          <ul className={`navbar-nav ${className || ""}`}>
            {navigationData.map((item) => (
              <li key={Math.random() + item.id} className="nav-item active">
                <Link className="nav-link" to={item.link}>
                  {item.title}
                  {item.submenu && <i className="fa fa-angle-down"></i>}
                </Link>
                {item.submenu && item.items.length > 0 && (
                  <ul className="sub-menu">
                    {item.items.map((submenu) => (
                      <li key={Math.random() + submenu.id}>
                        <Link to={submenu.link}>{submenu.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )
      }
    </navigationContext.Consumer>
  </>
);
export default Navigation;
