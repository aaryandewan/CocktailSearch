import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Sorry! It's a dead end</h1>
      </div>
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
    </section>
  );
};

export default Error;
