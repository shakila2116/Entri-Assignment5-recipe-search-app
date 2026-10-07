import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Recipe Search App</h1>

      <p className="lead">Search for your favorite recipes easily.</p>

      <p>
        Find recipes, view complete recipe details and save your favorite
        recipes.
      </p>

      <Link to="/recipes" className="btn btn-primary">
        Search Recipes
      </Link>
    </div>
  );
}

export default Dashboard;
