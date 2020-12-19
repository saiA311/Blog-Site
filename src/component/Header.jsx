/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import { useStateValue } from "./contextapi";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchvalue, setSearchValue] = useState("");
  const [{}, dispatch] = useStateValue();
  const HandelSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_VIEWMODULE",
      item: searchvalue.toUpperCase(),
    });
  };
  const history = useHistory();
  const clickhandeler = () => {
    history.push("/");
    dispatch({
      type: "ADD_VIEWMODULE",
      item: "",
    });
  };
  return (
    <div className="header">
      <div className="header__image">
        <div className="header__image-src"></div>
      </div>
      <div className="header__icons">
        <IconButton onClick={clickhandeler}>
          <HomeIcon color="inherit" />
        </IconButton>
        {activeSearch ? (
          <form className="header__form" onSubmit={HandelSubmit}>
            <IconButton
              onClick={() => {
                setActiveSearch(false);
              }}
            >
              <SearchIcon />
            </IconButton>
            <input
              type="text"
              name="search"
              className="header__form-input"
              id="search"
              onClick={() => {
                activeSearch && setActiveSearch(true);
              }}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus={true}
              value={searchvalue}
            />
            <button type="submit" className="header__form-btn">
              Search
            </button>{" "}
          </form>
        ) : (
          <IconButton
            onClick={() => {
              setActiveSearch(true);
            }}
          >
            <SearchIcon />
          </IconButton>
        )}
      </div>
      <div
        className="header__text"
        onClick={() => {
          activeSearch && setActiveSearch(false);
        }}
      >
        <h1>NEED is NEET</h1>
        <p className="quoat">
          No need to search across 100 websites and get confuse. All you want to
          know about this exam is surely at this place. Follow this regularly to
          have an idea about this exam, its subjects, difficulty, important
          topics and MCI notifications.
        </p>
        <h5>SUBSCRIBE</h5>
      </div>
    </div>
  );
};

export default Header;
