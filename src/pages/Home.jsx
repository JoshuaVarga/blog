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
      <Outlet />
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            content={post.content}
            createdAt={post.created_at}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
