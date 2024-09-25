import React from "react";
import useToggle from "../../Hooks/useToggle";
import "./Dropdown.css";

function DropDown({ datas = [], selected = "Select...", action, className }) {
  // custom hook
  const [toggle, setToggle] = useToggle(false);
  const handler = (e, value) => {
    e.preventDefault();
    action(value);
    setToggle.set(false);
  };
  return (
    <>
      {datas.length > 0 && (
        <div className={`my-select-box ${className || ""}`}>
          <button
            onClick={(e) => setToggle.toggle(e)}
            type="button"
            className="my-select-box-btn"
          >
            <span>{selected}</span>
            <span>
              <i className="fal fa-angle-down"></i>
            </span>
          </button>
          <div className={`my-select-box-section ${toggle ? "open" : ""}`}>
            <ul className="list">
              {datas.map((value) => (
                <li
                  className={selected === value ? "selected" : ""}
                  key={Math.random() + value}
                  onClick={(e) => handler(e, value)}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default DropDown;
