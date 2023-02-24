import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { readDuration, formatDate } from "../util";

function BlogCard(props) {
  const { post } = props;
  const { title, content, created_at: createdAt, tags } = post;

  return (
    <div className="card blog_card">
      <div className="card-body card-content justify-start">
        <figure>
          <img src="" alt="" />
        </figure>
        <Link
          className="z-10"
          to={title.replace(/ /g, "_")}
          onClick={() => window.scrollTo(0, 0)}
        >
          <h2 className="card-title">{title}</h2>
        </Link>
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
        <Link
          className="z-10"
          to={title.replace(/ /g, "_")}
          onClick={() => window.scrollTo(0, 0)}
        >
          <p className="text-sm">{content.substring(0, 127).trim()}...</p>
        </Link>
        <div className="card-actions">
          {tags.map((tag) => (
            <div className="badge badge-accent">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default BlogCard;
