import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStateValue } from "./contextapi";

const SideBar = ({ Showsidebar, Sidebar }) => {
  const [{ content }, dispatch] = useStateValue();
  const Arrayclass = [];
  content.forEach((item) => {
    Arrayclass.push((item?.Class).toString().split(", "));
  });
  const classvalue = [];
  const subersetarray = Array.prototype.concat.apply([], Arrayclass);
  subersetarray.forEach((item) => {
    const value1 = item.replace(`"`, ``);
    classvalue.push(value1.replace(`"`, ``));
  });
  const HandelClick = (e) => {
    dispatch({
      type: "ADD_VIEWMODULE",
      item: e.target.innerHTML,
    });
  };
  const Classvalue = [...new Set(classvalue)];

  return (
    <div
      className={Sidebar ? "sidebar active" : "sidebar"}
      onClick={() => Showsidebar(false)}
    >
      <div className="sidebar__Icon">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className="sidebar__profile">
        <div className="sidebar__profile-img"></div>
        <div className="sidebar__profile-info">
          <h3>Name</h3>
          <div className="sidebar__profile-info-btn">About me</div>
        </div>
      </div>
      <ul className="Classul" onClick={HandelClick}>
        {Classvalue === undefined
          ? ""
          : Classvalue.map((item) => (
              <li className="Classul__li" key={item} id={item}>
                {item}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default SideBar;
