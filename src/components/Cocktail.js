import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, isAloholic, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="cocktail image" />
      </div>
      <div className="cocktail-footer">
        {name}
        {isAloholic}
        {glass}
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
