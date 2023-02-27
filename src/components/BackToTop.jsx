import React, { useEffect, useState } from "react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.screen.height) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  if (showButton) {
    return (
      <button
        className="btn rounded-full left-1/2 bottom-8 -translate-x-6 outline outline-1 sticky"
        type="button"
        onClick={() => scrollToTop()}
      >
        Back to Top
      </button>
    );
  }
}

export default BackToTop;
