import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendarDays,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { readDuration, formatDate } from "../util";

function BlogPost() {
  const location = useLocation();
  const { post } = location.state;
  const { id, title, content, created_at: createdAt } = post;

  const variants = {
    hidden: {
      opacity: 0,
      width: "0%",
    },
    visible: {
      opacity: [0, 0, 1],
      width: "100%",
      marginLeft: ["0rem", "16rem", "16rem"],
      marginRight: ["0rem", "16rem", "16rem"],
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      id={id}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Link className="btn rounded-full absolute left-8 top-8" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <h1 className="pt-16 mt-0 mb-2 text-5xl pb-1">{title}</h1>
      <div className="card-actions">
        <h3>
          <FontAwesomeIcon icon={faCalendarDays} fixedWidth />
          {formatDate(createdAt)}
        </h3>
        <h3>
          <FontAwesomeIcon icon={faStopwatch} fixedWidth />
          {readDuration(content)} min read
        </h3>
      </div>
      <br />
      {content}
    </motion.div>
  );
}

export default BlogPost;
