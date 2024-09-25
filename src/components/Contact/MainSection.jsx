import React, { useState } from "react";
import DropDown from "../Helpers/DropDown";

function MainSection() {

  return (
    <>


      <div className="codex-er-contact-us-area">
        <div className=" container">
          <div className="row">
            <div className=" col-lg-12">
              <div className="codex-er-contact-us-box">
                <form action="#">
                  <div className="codex-er-contact-title">
                    <h4 className="codex-er-title">
                      Get in touch & let us know
                    </h4>
                  </div>
                  <div className="row">
                    <div className=" col-lg-4">
                      <div className="codex-er-input-box">
                        <input type="text" placeholder="Enter full name" />
                        <i className="fal fa-user"></i>
                      </div>
                    </div>
                    <div className=" col-lg-4">
                      <div className="codex-er-input-box">
                        <input type="email" placeholder="Enter address" />
                        <i className="fal fa-envelope"></i>
                      </div>
                    </div>
                    <div className=" col-lg-4">

                    </div>
                    <div className=" col-lg-12">
                      <div className="codex-er-input-box">
                        <textarea
                          name="#"
                          id="#"
                          cols="30"
                          rows="10"
                          placeholder="Enter message"
                        ></textarea>
                        <i className="fal fa-pencil"></i>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="codex-er-main-btn">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default MainSection;
