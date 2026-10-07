import React from "react";
import { Link } from "react-router-dom";

function Favourites({ favourites, setFavourites }) {
  const removeFavourite = (id) => {
    setFavourites(
      favourites.filter((recipe) => recipe.idMeal !== id)
    );
  };

  return (
    <div>
      <h1 className="mb-4">Favourites</h1>

      {favourites.length === 0 ? (
        <div className="alert alert-info">
          You have no favourite recipes yet.
        </div>
      ) : (
        <div className="row g-4">
          {favourites.map((recipe) => (
            <div
              className="col-md-6 col-lg-4"
              key={recipe.idMeal}
            >
              <div className="card h-100 shadow-sm">

                <img
                  src={recipe.strMealThumb}
                  className="card-img-top"
                  alt={recipe.strMeal}
                />

                <div className="card-body d-flex flex-column">

                  <h5 className="card-title">
                    {recipe.strMeal}
                  </h5>

                  <div className="mt-auto">

                    <Link
                      to={`/recipes/${recipe.idMeal}`}
                      className="btn btn-primary me-2"
                    >
                      View Details
                    </Link>

                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        removeFavourite(recipe.idMeal)
                      }
                    >
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;