/* eslint-disable no-empty-pattern */
import "./App.css";
import Header from "./Header";
import BlogContents from "../post.json";
import { useStateValue } from "./contextapi";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PostContent from "./PostContent";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    BlogContents.forEach((items) => {
      dispatch({
        type: "ADD_ITEMS",
        item: items,
      });
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path={"/post/:postID"} component={PostContent} />
          <Route path={"/"} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
