import React from "react";
import PropTypes from "prop-types";

function BlogCard(props) {
  const { title, content, createdAt } = props;

  return (
    <div className="card transition ease-in-out delay-150 duration-300 w-96 m-4 bg-base-200 shadow-xl hover:scale-105 hover:bg-base-300">
      <header className="card-body">
        <figure>
          <img src="" alt="" />
        </figure>
        <h2 className="card-title">{title}</h2>
        <p>{content.substring(0, 127)}...</p>
        <h3>{createdAt}</h3>
      </header>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default BlogCard;
