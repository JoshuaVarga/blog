import React from "react";
// import PropTypes from "prop-types";

function BlogPost() {
  // const { post } = props;
  const post = {
    title: "test",
  };

  return <div id={post.title}>{post.title}</div>;
}

// BlogPost.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     created_at: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default BlogPost;
