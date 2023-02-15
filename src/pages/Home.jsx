import React from "react";
import { Outlet } from "react-router-dom";
import { BlogCards } from "../components";

function Home() {
  return (
    <div>
      <nav className="navbar bg-gradient-to-b from-base-100 via-base-100 sticky top-0 z-10">
        <div className="navbar-start" />
        <div className="navbar-center">
          <h1 className="font-extrabold">Joshua Varga</h1>
        </div>
        <div className="navbar-end">
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
        <BlogCards />
      </div>
    </div>
  );
}

export default Home;
