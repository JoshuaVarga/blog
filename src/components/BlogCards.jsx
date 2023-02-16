import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlogCard from "./BlogCard";

function BlogCards(props) {
  const { posts } = props;

  function handleOnMouseMove(e) {
    const cards = document.getElementsByClassName("blog_card");
    for (let i = 0; i < cards.length; i += 1) {
      const card = cards[i];
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  }

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
        delayChildren: 1,
      },
    },
  };

  return (
    posts && (
      <motion.ul
        className="cards flex flex-1 flex-wrap content-start"
        variants={variants}
        initial="hidden"
        animate="visible"
        onMouseMove={(e) => handleOnMouseMove(e)}
      >
        {posts.map((post) => (
          <motion.li key={post.id} variants={variants}>
            <BlogCard post={post} />
          </motion.li>
        ))}
      </motion.ul>
    )
  );
}

BlogCards.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default BlogCards;
