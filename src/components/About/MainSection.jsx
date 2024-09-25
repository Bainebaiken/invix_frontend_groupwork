import React, { useState } from "react";

function MainSection() {
  const missions = [
    { id: 1, name: "Mission #1" },
    { id: 2, name: "Mission #2" },
    { id: 3, name: "Mission #3" },
  ];
  const [tab, setTab] = useState(missions[0].name);
  const tabHandler = (e, value) => {
    e.preventDefault();
    setTab(value);
  };
  return (
    <section className="codex-er-about-us-area pb-60">
      <div className=" container">
        <div className="row">
          <div className=" col-lg-12">
            <div className="codex-er-about-us-thumb">
              {/* <img
                src={require(`../../assets/images/about-thumb.jpg`).default}
                alt=""
              /> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="codex-er-about-us-content">
              <h4 className="codex-er-title">About Us</h4>
              <p>
              Invix is a cutting-edge news organization that empowers 
              communities and individuals with accurate, unbiased, and 
              timely information. Our team of experienced journalists and 
              researchers is dedicated to uncovering the truth, holding 
              power accountable, and telling the stories that matter most.
              </p>
              <p>At Invix, we believe in the power of fact-based journalism 
                to drive positive change and foster a more informed and 
                engaged society. Our mission is to provide high-quality 
                reporting that sparks meaningful conversations, promotes 
                critical thinking, and inspires collective progress.

              </p>
            </div>
          </div>
          <div className=" col-lg-6">
            <div className="codex-er-about-us-content">
              <h4 className="codex-er-title">Mission & Vision</h4>
              <p>
              To seek truth and report it, to hold power accountable, 
              and to inform and engage the public in a fair and transparent way
              </p>
              <p>
              We aim to set the standard for innovative, inclusive, and impactful 
              journalism, inspiring a new generation of news consumers and creators.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default MainSection;
