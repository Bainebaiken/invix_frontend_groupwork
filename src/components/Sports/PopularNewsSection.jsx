
import React, { useState } from "react";
import PostCardStyle from "../../containers/Home/Cards/PostCardStyleHome";
import latestPostImage1 from "../../assets/images/latest-post-1.jpg";
import editorsPackThumbnail from "../../assets/images/editors-pack-thumb-1.jpg";

function PopularNewsSection({ popularNewsData }) {
  const tabCategory = [
    { id: 100, name: "Popular" },
    { id: 1, name: "Trending" },
    { id: 3, name: "Hot News" },
    { id: 6, name: "Recent" },
  ];

  const [tab, setTab] = useState(tabCategory[0].id);

  const tabHandler = (e, value) => {
    e.preventDefault();
    setTab(value);
  };

  // Slice the data based on the selected tab
  const displayedPosts = popularNewsData.slice(0, tab);

  return (
    <section className="codex-er-popular-news-area pt-60 pb-25">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="codex-er-popular-news-title">
                <h4 className="codex-er-title">Sports News</h4>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  {tabCategory.map((tabItem) => (
                    <li key={tabItem.id} className="nav-item" role="presentation">
                      <a
                        onClick={(e) => tabHandler(e, tabItem.id)}
                        className={`nav-link ${tab === tabItem.id ? "active" : ""}`}
                        id={`pills-${tabItem.id}-tab`}
                        data-bs-toggle="pill"
                        href={`#pills-${tabItem.id}`}
                        role="tab"
                        aria-controls={`pills-${tabItem.id}`}
                        aria-selected={tab === tabItem.id}
                      >
                        {tabItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className={`tab-pane fade ${tabCategory.find((item) => item.id === tab) ? "show active" : ""}`}
                  id={`pills-${tab}`}
                  role="tabpanel"
                  aria-labelledby={`pills-${tab}-tab`}
                >
                  <div className="codex-er-popular-news-items">
                    <div className="row g-0">
                      {displayedPosts.map((popularNewsItem) => (
                        <div key={popularNewsItem.id} className="col-lg-6 col-md-6">
                          <PostCardStyle
                            datas={{
                              image: popularNewsItem.image,
                              date: popularNewsItem.date,
                              title: popularNewsItem.title,
                              category: popularNewsItem.category,
                              user: popularNewsItem.user,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className=" col-lg-3">
              <div className="codex-er-populer-news-sidebar">
                
                <div className="codex-er-populer-news-sidebar-post pt-60">
                  <div className="codex-er-popular-news-title">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab-2"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          href="#pills-home"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Most Popular
                        </a>
                      </li>
 
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent-2">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="codex-er-sidebar-latest-post-box">

                        <div className="codex-er-sidebar-latest-post-item">
                          <div className="codex-er-thumb">
                            <img
                              src={
                                latestPostImage1
                              }
                              alt="latest"
                            />
                          </div>
                          <div className="codex-er-content">
                            <span>
                              <i className="fal fa-calendar-alt"></i> 24th
                              June 2024
                            </span>
                            <h4 className="codex-er-title">
                              <a href="#">
                                Why creating inclusive classrooms matters
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="codex-er-sidebar-latest-post-item">
                          <div className="codex-er-thumb">
                            <img
                              src={
                                latestPostImage1
                              }
                              alt="latest"
                            />
                          </div>
                          <div className="codex-er-content">
                            <span>
                              <i className="fal fa-calendar-alt"></i> 24th
                              June 2024
                            </span>
                            <h4 className="codex-er-title">
                              <a href="#">
                                Celebrating Asian Pacific American art and
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="codex-er-sidebar-latest-post-item">
                          <div className="codex-er-thumb">
                            <img
                              src={
                                latestPostImage1
                              }
                              alt="latest"
                            />
                          </div>
                          <div className="codex-er-content">
                            <span>
                              <i className="fal fa-calendar-alt"></i> 24th
                              June 2024
                            </span>
                            <h4 className="codex-er-title">
                              <a href="#">
                                From overcoming burnout to finding new
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="codex-er-sidebar-latest-post-item">
                          <div className="codex-er-thumb">
                            <img
                              src={
                                latestPostImage1
                              }
                              alt="latest"
                            />
                          </div>
                          <div className="codex-er-content">
                            <span>
                              <i className="fal fa-calendar-alt"></i> 24th
                              June 2024
                            </span>
                            <h4 className="codex-er-title">
                              <a href="#">
                                Sparks of inspiration to the new trend 2021
                              </a>
                            </h4>
                          </div>
                        </div>
                        q
                      </div>
                    </div>
                    
                  </div>
                </div>

                {/* Social Media */}
                <div className="codex-er-populer-news-social codex-er-author-page-social mt-40">
                  <div className="codex-er-popular-news-title">
                    <h3 className="codex-er-title">Social Connects</h3>
                  </div>
                  <div className="codex-er-social-list">
                    <div className="codex-er-list">
                      <a target="_blank"  href="https://www.facebook.com/InvixMediaServices">
                        <span>
                          <i className="fab fa-facebook-f"></i>
                          <span>15000</span> Likes
                        </span>
                        <             span>Like</span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="fab fa-twitter"></i> <span>15000</span>
                          Likes
                        </span>
                        <span>Tweet</span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="fab fa-behance"></i> <span>5k+</span>
                          Follower
                        </span>
                        <span>Follow</span>
                      </a>
                      <a href="https://www.tiktok.com/@invix_media?is_from_webapp=1&sender_device=pc">
                        <span>
                          <i className="fab fa-youtube"></i> <span>367</span>
                          Subscribe
                        </span>
                        <span>Subscribe</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Video Post */}
                <div className="codex-er-populer-news-social codex-er-author-page-social mt-40">
                  <div className="codex-er-popular-news-title">
                    <h3 className="codex-er-title">Video Post</h3>
                  </div>
                  <div className="codex-er-video-post codex-er-recently-viewed-item">
                    <div className="codex-er-latest-news-item">
                      <div className="codex-er-thumb">
                        <img
                          src={
                            editorsPackThumbnail
                          }
                          alt=""
                        />
                        <div className="codex-er-play">
                          <a href="#">
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                      </div>
                      <div className="codex-er-content">
                        <div className="codex-er-meta-item">
                          <div className="codex-er-meta-categories">
                            <a href="#">Technology</a>
                          </div>
                          <div className="codex-er-meta-date">
                            <span>
                              <i className="fal fa-calendar-alt"></i>24th
                              July 2024
                            </span>
                          </div>
                        </div>
                        <h5 className="codex-er-title">
                          <a href="#">
                            Nearly three weeks after Rita Ora and Chris Brown
                            released their collaboration, “Body On Me,”
                          </a>
                        </h5>
                        <div className="codex-er-meta-author">
                          <span>
                            By <span>Namuddu Mariam</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default PopularNewsSection;

