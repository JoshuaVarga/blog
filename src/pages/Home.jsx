import React, { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { BlogCards } from "../components";

function Home() {
  const loader = useLoaderData();

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

  return (
    <div>
      <nav className="navbar bg-gradient-to-b from-base-100 via-base-100 sticky top-0 z-10">
        <div className="navbar-start" />
        <div className="navbar-center">
          <h1 className="font-extrabold">Joshua Varga</h1>
        </div>
        <div className="navbar-end">
          <div className="divider divider-vertical">|</div>
          <a
            className="scale-75"
            href="https://joshuavarga.dev/"
            rel="noreferrer"
            target="_blank"
          >
            About
          </a>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row">
        <Outlet key="BlogPost" />
        <BlogCards posts={loader.data} />
      </div>
      {showButton && (
        <button
          className="btn rounded-full left-1/2 bottom-8 -translate-x-6 outline outline-1 sticky"
          type="button"
          onClick={() => scrollToTop()}
        >
          Back to Top
        </button>
      )}
    </div>
  );
}

export default Home;
