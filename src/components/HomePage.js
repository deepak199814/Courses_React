import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="Jumbotron">
      <h1>Pluralsight learn</h1>
      <p>React function component</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}
