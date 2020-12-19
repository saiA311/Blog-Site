import React from "react";
import { useStateValue } from "./contextapi";
import PostCard from "./post-card";

const Home = () => {
  const [{ content, homepageView }, dispatch] = useStateValue();

  const newclass = (Class, testelement) => {
    const element = Class.filter((item) => {
      let classvalue = [];
      (item?.Class).toString()
        .split(", ")
        .forEach((item) => {
          const value1 = item.replace(`"`, ``);
          const value2 = value1.replace(`"`, ``);
          classvalue.push(value2.replace(`\r`, ``).toUpperCase());
        });

      return classvalue.includes(testelement);
    });
    return element;
  };
  const pageValues = newclass(content, homepageView);
  const ClicksHandler = () => {
    dispatch({ type: "ADD_VIEWMODULE", item: "" });
  };
  const excerptlist = content.map((post) => {
    return post.content.split(" ").slice(0, 50).join(" ");
  });
  const newpageValues = pageValues.map((post) => {
    return post.content.split(" ").slice(0, 50).join(" ");
  });

  if (homepageView === "") {
    return (
      <div className="homepage">
        <h1>homepage</h1>
        {content?.map((item, i) => (
          <PostCard
            title={item.title}
            date={item.date}
            _id={item.id}
            key={item.id}
            content={excerptlist[i]}
          />
        ))}
      </div>
    );
  } else if (pageValues.length > 0) {
    return (
      <div className="homepage ">
        <h1 className="changed" onClick={ClicksHandler}>
          homepage
        </h1>
        {pageValues?.map((item, i) => (
          <PostCard
            title={item.title}
            date={item.date}
            _id={item.id}
            key={item.id}
            content={newpageValues[i]}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="homepage ">
        <h1 className="changed" onClick={ClicksHandler}>
          homepage
        </h1>
        <p className="none">
          No post is available of this keyword {homepageView}.
        </p>
      </div>
    );
  }
};

export default Home;
