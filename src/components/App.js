import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Header";
import Coursepage from "./CoursePage";

export default function App() {
  function getRouting() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    if (route === "/courses") return <Coursepage />;
    else return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getRouting()}
    </div>
  );
}
