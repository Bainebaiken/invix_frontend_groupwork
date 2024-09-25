import React from "react";
import SliderCom from "../Helpers/SliderCom";
import slider1 from "../../assets/images/news-slider-1.png";
import slider2 from "../../assets/images/news-slider-2.png";
import slider3 from "../../assets/images/news-slider-3.png";
import slider4 from "../../assets/images/news-slider-5.png";

function HeroSliderSection() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section className="codex-er-news-slider-2-area pt-50">
      <div className=" container-fluid p-0">
        <div className="row">
          <div className=" col-lg-12">
            <div className="codex-er-news-slider-2-item">
              <SliderCom settings={settings}>
                <div className="codex-er-news-viewed-most">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        slider1
                      }
                      alt=""
                    />
                  </div>
                  <div className="codex-er-content">
                    <div className="codex-er-meta-item">
                      <div className="codex-er-meta-categories">
                        <a href="#">Technology</a>
                      </div>
                      <div className="codex-er-meta-date">
                        <span>
                          <i className="fal fa-calendar-alt"></i> 24th February
                          2024
                        </span>
                      </div>
                    </div>
                    <h4 className="codex-er-title">
                      <a href="#">
                        Sparks of inspiration to the new trend 2021
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="codex-er-news-viewed-most">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        slider2
                      }
                      alt=""
                    />
                  </div>
                  <div className="codex-er-content">
                    <div className="codex-er-meta-item">
                      <div className="codex-er-meta-categories">
                        <a href="#">Technology</a>
                      </div>
                      <div className="codex-er-meta-date">
                        <span>
                          <i className="fal fa-calendar-alt"></i> 24th February
                          2024
                        </span>
                      </div>
                    </div>
                    <h4 className="codex-er-title">
                      <a href="#">
                        Father John Misty Talks Pop Music at Pitchfork Fest in
                        Paris
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="codex-er-news-viewed-most">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        slider3
                      }
                      alt=""
                    />
                  </div>
                  <div className="codex-er-content">
                    <div className="codex-er-meta-item">
                      <div className="codex-er-meta-categories">
                        <a href="#">Technology</a>
                      </div>
                      <div className="codex-er-meta-date">
                        <span>
                          <i className="fal fa-calendar-alt"></i> 24th February
                          2024
                        </span>
                      </div>
                    </div>
                    <h4 className="codex-er-title">
                      <a href="#">
                        Cover Pixies’ Classic ‘Where Is My Mind’: Exclusive
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="codex-er-news-viewed-most">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        slider4
                      }
                      alt=""
                    />
                  </div>
                  <div className="codex-er-content">
                    <div className="codex-er-meta-item">
                      <div className="codex-er-meta-categories">
                        <a href="#">Technology</a>
                      </div>
                      <div className="codex-er-meta-date">
                        <span>
                          <i className="fal fa-calendar-alt"></i> 24th February
                          2024
                        </span>
                      </div>
                    </div>
                    <h4 className="codex-er-title">
                      <a href="#">
                        Illinois House Democrats wrangle over Madigan’s future
                      </a>
                    </h4>
                  </div>
                </div>
              </SliderCom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSliderSection;
