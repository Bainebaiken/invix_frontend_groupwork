import React from "react";

function SocialList() {
  return (
    <>
      <div className="codex-er-social-list">
        <div className="codex-er-list">
          <a href="https://www.facebook.com/InvixMediaServices">
            <span>
              <i className="fab fa-facebook-f"></i> <span>15000</span>
              Likes
            </span>
            <span>Like</span>
          </a>
          <a href="https://x.com/InvixMedia">
            <span>
              <i className="fab fa-twitter"></i> <span>1500</span> Likes
            </span>
            <span>Tweet</span>
          </a>
          <a href="https://www.tiktok.com/@invix_media?is_from_webapp=1&sender_device=pc">
            <span>
              <i className="fab fa-behance"></i> <span>5k+</span> Follower
            </span>
            <span>Follow</span>
          </a>
          <a href=" 	www.youtube.com/@INVIX_MEDIA_Services">
            <span>
              <i className="fab fa-youtube"></i> <span>1500</span>
              Subscribe
            </span>
            <span>Subscribe</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default SocialList;
