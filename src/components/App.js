import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Header";
import Coursepage from "./CoursePage";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={Coursepage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />{" "}
        {/* Not found should be in last beacuse <switch> tag will stop once if it found match*/}
      </Switch>
    </div>
  );
}
