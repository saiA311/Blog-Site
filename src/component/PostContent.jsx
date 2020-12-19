import React from "react";
import { useStateValue } from "./contextapi";
import Markdown from "react-markdown";

const PostContent = (props) => {
  const [{ content }] = useStateValue();
  const metaurlstring = props.match.params.postID;
  const postID = Number(metaurlstring.slice(1, metaurlstring.length));
  const pagepost = content.filter((post) => post.id === postID);
  if (pagepost.length !== 0) {
    return (
      <div className="post-content">
        {pagepost?.map((item, i) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <small>-{item.date}</small>
            <hr />
            <Markdown children={item.content} allowDangerousHtml={true} />
            <hr />
            <b>Comments: </b>
            <form>
              <input
                type="text"
                name="comment"
                id="comment"
                className="comment_box"
              />
            </form>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="post_failed">
        <h1>ERROR: 404 page not Found</h1>
      </div>
    );
  }
};

export default PostContent;
