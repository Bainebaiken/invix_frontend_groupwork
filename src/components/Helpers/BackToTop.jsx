import React, { useEffect } from "react";
import TopToBottom from "../../lib/TopToBottom";

function BackToTop({ className }) {
  useEffect(() => {
    TopToBottom(".codex-er-back-to-top");
  });
  return (
    <>
      <div className={`codex-er-back-to-top ${className || ""}`}>
        <p>
          BACK TO TOP <i className="fal fa-long-arrow-right"></i>
        </p>
      </div>
    </>
  );
}

export default BackToTop;
