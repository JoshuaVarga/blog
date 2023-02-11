import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import supabase from "../supabaseClient";
import BlogCard from "../components/BlogCard";

function Home() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const { data } = await supabase.from("blog_posts").select();
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-start" />
        <div className="navbar-end">
          <a href="https://joshuavarga.dev/">About</a>
        </div>
      </nav>
      <div className="flex">
        <Outlet />
        <div className="flex flex-1 flex-wrap">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
