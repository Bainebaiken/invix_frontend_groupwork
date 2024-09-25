import React, { useRef } from "react";
import SliderCom from "../Helpers/SliderCom";

function FeaturePartSection() {
  const sliderOne = useRef(null);
  const sliderTwo = useRef(null);
  const sliderThree = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  const sliderPev = (value) => {
    // eslint-disable-next-line no-unused-expressions
    value === "one"
      ? sliderOne.current.slickPrev()
      : value === "two"
      ? sliderTwo.current.slickPrev()
      : value === "three"
      ? sliderThree.current.slickPrev()
      : false;
  };
  const sliderNext = (value) => {
    // eslint-disable-next-line no-unused-expressions
    value === "one"
      ? sliderOne.current.slickNext()
      : value === "two"
      ? sliderTwo.current.slickNext()
      : value === "three"
      ? sliderThree.current.slickNext()
      : false;
  };
  return (
    <section className="codex-er-featured-2-area pt-30 pb-60">
      <div className=" container">
        <div className="row">
          <div className=" col-lg-4">
            <div className="codex-er-featured-title">
              <h4 className="codex-er-title">Sports</h4>
            </div>
            <div className="codex-er-featured-slider-2">
              <span
                onClick={() => sliderPev("one")}
                className="prev slick-arrow"
                style={{ display: "block" }}
              >
                <i className="fal fa-angle-left"></i>
              </span>
              <SliderCom selector={sliderOne} settings={settings}>
                <div className="codex-er-featured-item">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        require(`../../assets/images/featured-item-1.jpg`)
                          .default
                      }
                      alt=""
                    />
                    <div className="codex-er-icon">
                      <a
                        href="#test-popup-1"
                        className="codex-er-newsr-popup-audio"
                      >
                        <i className="fal fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="codex-er-content">
                    <h4 className="codex-er-title">
                      <a href="#">
                        El productor Peter CottonTale captura el 2020 en una
                        canción
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fas fa-play"></i> The tourists who believe
                        travel restrictions don't apply to
                      </li>
                      <li>
                        <i className="fas fa-play"></i> Can antimicrobial
                        fashion protect you from the main with coronavirus?
                        Earlier this month, Polygiene
                      </li>
                      <li>
                        <i className="fas fa-play"></i> Earlier this month,
                        Polygiene, which recently partnered{" "}
                      </li>
                    </ul>
                    <div
                      id="test-popup-1"
                      className="codex-er-newsr-white-popup  mfp-hide"
                    >
                      {/* <iframe
                      width="1280"
                      height="720"
                      src="https://www.youtube.com/embed/5bxFSOA5JYo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    </div>
                  </div>
                </div>
                <div className="codex-er-featured-item">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        require(`../../assets/images/featured-item-2.jpg`)
                          .default
                      }
                      alt=""
                    />
                    <div className="codex-er-icon">
                      <a
                        href="#test-popup-2"
                        className="codex-er-newsr-popup-audio"
                      >
                        <i className="fal fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="codex-er-content">
                    <h4 className="codex-er-title">
                      <a href="#">
                        A Google designer takes us inside Search’s mobile
                        redesign
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fas fa-play"></i> The tourists who believe
                        travel restrictions don't apply to
                      </li>
                      <li>
                        <i className="fas fa-play"></i> Can antimicrobial
                        fashion protect you from the main with coronavirus?
                        Earlier this month, Polygiene
                      </li>
                      <li>
                        <i className="fas fa-play"></i> Earlier this month,
                        Polygiene, which recently partnered{" "}
                      </li>
                    </ul>
                    <div
                      id="test-popup-2"
                      className="codex-er-newsr-white-popup  mfp-hide"
                    >
                      {/* <iframe
                      width="1280"
                      height="720"
                      src="https://www.youtube.com/embed/5bxFSOA5JYo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    </div>
                  </div>
                </div>
              </SliderCom>
              <span
                onClick={() => sliderNext("one")}
                className="next slick-arrow"
                style={{ display: "block" }}
              >
                <i className="fal fa-angle-right"></i>
              </span>
            </div>
          </div>
          <div className=" col-lg-4">
            <div className="codex-er-featured-title">
              <h4 className="codex-er-title">Events</h4>
            </div>
            <div className="codex-er-featured-slider-2">
              <span
                className="prev slick-arrow"
                onClick={() => sliderPev("two")}
                style={{ display: "block" }}
              >
                <i className="fal fa-angle-left"></i>
              </span>
              <SliderCom selector={sliderTwo} settings={settings}>
                <div className="codex-er-featured-item">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        require(`../../assets/images/featured-item-2.jpg`)
                          .default
                      }
                      alt=""
                    />
                    <div className="codex-er-icon">
                      <a
                        href="#test-popup-3"
                        className="codex-er-newsr-popup-audio"
                      >
                        <i className="fal fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="codex-er-content">
                    <h4 className="codex-er-title">
                      <a href="#">
                        How location helps provide more relevant search results
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fas fa-microphone"></i> The tourists who
                        believe travel restrictions don't apply to
                      </li>
                      <li>
                        <i className="fas fa-microphone"></i> Can antimicrobial
                        fashion protect you from the main with coronavirus?
                        Earlier this month, Polygiene
                      </li>
                      <li>
                        <i className="fas fa-microphone"></i> Earlier this
                        month, Polygiene, which recently partnered{" "}
                      </li>
                    </ul>
                    <div
                      id="test-popup-3"
                      className="codex-er-newsr-white-popup  mfp-hide"
                    >
                      {/* <iframe
                      width="1280"
                      height="720"
                      src="https://www.youtube.com/embed/5bxFSOA5JYo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    </div>
                  </div>
                </div>
                <div className="codex-er-featured-item">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        require(`../../assets/images/featured-item-3.jpg`)
                          .default
                      }
                      alt=""
                    />
                    <div className="codex-er-icon">
                      <a
                        href="#test-popup-4"
                        className="codex-er-newsr-popup-audio"
                      >
                        <i className="fal fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="codex-er-content">
                    <h4 className="codex-er-title">
                      <a href="#">
                        How you'll find accurate and timely information on
                        COVID-19
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fas fa-microphone"></i> The tourists who
                        believe travel restrictions don't apply to
                      </li>
                      <li>
                        <i className="fas fa-microphone"></i> Can antimicrobial
                        fashion protect you from the main with coronavirus?
                        Earlier this month, Polygiene
                      </li>
                      <li>
                        <i className="fas fa-microphone"></i> Earlier this
                        month, Polygiene, which recently partnered{" "}
                      </li>
                    </ul>
                    <div
                      id="test-popup-4"
                      className="codex-er-newsr-white-popup  mfp-hide"
                    >
                      {/* <iframe
                      width="1280"
                      height="720"
                      src="https://www.youtube.com/embed/5bxFSOA5JYo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    </div>
                  </div>
                </div>
              </SliderCom>
              <span
                onClick={() => sliderNext("two")}
                className="next slick-arrow"
                style={{ display: "block" }}
              >
                <i className="fal fa-angle-right"></i>
              </span>
            </div>
          </div>
          <div className=" col-lg-4">
            <div className="codex-er-featured-title">
              <h4 className="codex-er-title">Technology</h4>
            </div>
            <div className="codex-er-featured-slider-2">
              <span
                onClick={() => sliderPev("three")}
                className="prev slick-arrow"
                style={{ display: "block" }}
              >
                <i className="fal fa-angle-left"></i>
              </span>
              <SliderCom selector={sliderThree} settings={settings}>
                <div className="codex-er-featured-item">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        require(`../../assets/images/featured-item-3.jpg`)
                          .default
                      }
                      alt=""
                    />
                    <div className="codex-er-icon">
                      <a
                        href="#test-popup-5"
                        className="codex-er-newsr-popup-audio"
                      >
                        <i className="fal fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="codex-er-content">
                    <h4 className="codex-er-title">
                      <a href="#">
                        Paying the penalty: Fear and loathing in the Premier
                        League
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fas fa-film"></i> The tourists who believe
                        travel restrictions don't apply to
                      </li>
                      <li>
                        <i className="fas fa-film"></i> Can antimicrobial
                        fashion protect you from the main with coronavirus?
                        Earlier this month, Polygiene
                      </li>
                      <li>
                        <i className="fas fa-film"></i> Earlier this month,
                        Polygiene, which recently partnered{" "}
                      </li>
                    </ul>
                    <div
                      id="test-popup-5"
                      className="codex-er-newsr-white-popup  mfp-hide"
                    >
                      {/* <iframe
                      width="1280"
                      height="720"
                      src="https://www.youtube.com/embed/5bxFSOA5JYo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    </div>
                  </div>
                </div>
                <div className="codex-er-featured-item">
                  <div className="codex-er-thumb">
                    <img
                      src={
                        require(`../../assets/images/featured-item-1.jpg`)
                          .default
                      }
                      alt=""
                    />
                    <div className="codex-er-icon">
                      <a
                        href="#test-popup-6"
                        className="codex-er-newsr-popup-audio"
                      >
                        <i className="fal fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="codex-er-content">
                    <h4 className="codex-er-title">
                      <a href="#">
                        Sweet streams: 2020's top trending TV shows and movies
                      </a>
                    </h4>
                    <ul>
                      <li>
                        <i className="fas fa-film"></i> The tourists who believe
                        travel restrictions don't apply to
                      </li>
                      <li>
                        <i className="fas fa-film"></i> Can antimicrobial
                        fashion protect you from the main with coronavirus?
                        Earlier this month, Polygiene
                      </li>
                      <li>
                        <i className="fas fa-film"></i> Earlier this month,
                        Polygiene, which recently partnered{" "}
                      </li>
                    </ul>
                    <div
                      id="test-popup-6"
                      className="codex-er-newsr-white-popup  mfp-hide"
                    >
                      {/* <iframe
                      width="1280"
                      height="720"
                      src="https://www.youtube.com/embed/5bxFSOA5JYo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    </div>
                  </div>
                </div>
              </SliderCom>
              <span
                onClick={() => sliderNext("three")}
                className="next slick-arrow"
                style={{ display: "block" }}
              >
                <i className="fal fa-angle-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturePartSection;
