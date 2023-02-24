import React from "react";
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router-dom";
import MarkdownView from "react-showdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendarDays,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import { readDuration, formatDate } from "../util";

function BlogPost() {
  const post = useLoaderData().data[0];
  const { id, title, content, created_at: createdAt } = post;

  const variants = {
    hidden: {
      opacity: 0,
      width: "0%",
    },
    hiddenMobile: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: [0, 0, 0, 1],
      width: "100%",
      transition: {
        duration: 1,
      },
    },
    visibleMobile: {
      opacity: [0, 0, 0, 1],
      height: "auto",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="flex justify-center"
      variants={variants}
      initial={window.screen.width > 768 ? "hidden" : "hiddenMobile"}
      animate={window.screen.width > 768 ? "visible" : "visibleMobile"}
    >
      <Link className="btn rounded-full fixed left-2 top-2 z-20" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <motion.div id={id} className="w-4/5">
        <h1 className="pt-16 mt-0 mb-2 text-2xl pb-1 font-bold">{title}</h1>
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
        <MarkdownView className="whitespace-pre-wrap" markdown={content} />
      </motion.div>
    </motion.div>
  );
}

export default BlogPost;
