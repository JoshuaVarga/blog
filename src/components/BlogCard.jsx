import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { readDuration, formatDate } from "../util";

function BlogCard(props) {
  const { title, content, createdAt } = props;

  return (
    <div className="card transition ease-in-out delay-150 duration-300 w-96 m-4 bg-base-200 shadow-xl hover:scale-105 hover:bg-base-300">
      <div className="card-body">
        <figure>
          <img src="" alt="" />
        </figure>
        <Link to={title.replace(" ", "_")} onClick={() => console.log(title)}>
          <h2 className="card-title">{title}</h2>
          <p>{content.substring(0, 127)}...</p>
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
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default BlogCard;
