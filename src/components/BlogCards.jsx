import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import supabase from "../supabaseClient";
import BlogCard from "./BlogCard";

function BlogCards() {
  const [posts, setPosts] = useState();

  const variants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 9,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  async function getPosts() {
    const { data } = await supabase.from("blog_posts").select();
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    posts && (
      <motion.ul
        className="flex flex-1 flex-wrap"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {posts.map((post) => (
          <motion.li variants={variants}>
            <BlogCard key={post.id} post={post} />
          </motion.li>
        ))}
      </motion.ul>
    )
  );
}

export default BlogCards;
