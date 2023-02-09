import React, { useEffect, useState } from "react";
import supabase from "./supabaseClient";

import BlogCard from "./components/BlogCard";

function App() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const { data } = await supabase.from("blog_posts").select();
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          content={post.content}
          createdAt={post.created_at}
        />
      ))}
    </div>
  );
}

export default App;
