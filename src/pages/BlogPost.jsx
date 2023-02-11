import React from "react";
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

  return (
    <div className="ml-64 mr-64 grow-[2]" id={id}>
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
    </div>
  );
}

export default BlogPost;
