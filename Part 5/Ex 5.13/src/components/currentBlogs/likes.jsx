import handleClick from "./addLike";
import { useState } from "react";
import PropTypes from "prop-types";
const Likes = ({ blog }) => {
  const [likes, setLikes] = useState(blog.likes);
  return (
    <p style={{ margin: "0 0 0 5px" }}>
      Likes: {likes}{" "}
      <button
        onClick={() => {
          handleClick(blog, likes, setLikes);
        }}
      >
        like
      </button>
    </p>
  );
};

Likes.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Likes;
