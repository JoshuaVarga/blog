import React from "react";
import { Outlet } from "react-router-dom";
import { BlogCards } from "../components";

function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-start" />
        <div className="navbar-end">
          <a href="https://joshuavarga.dev/">About</a>
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
