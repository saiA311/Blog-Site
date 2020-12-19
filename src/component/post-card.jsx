/* eslint-disable no-empty-pattern */
import React from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { useStateValue } from "./contextapi";

const PostCard = ({ title, date, content, _id }) => {
  const [{}, dispatch] = useStateValue();
  return (
    <div className="post_card">
      <h2>{title}</h2>
      <small>-{date}</small>
      <hr />
      <div className="post_card-content">
        <Markdown children={content} allowDangerousHtml={true} />
        <Link to={`/post/:${_id}`}>
          <div
            className="post_card-readMore"
            onClick={(e) => dispatch({ type: "ADD_VIEWMODULE", item: "" })}
          >
            Read More
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
