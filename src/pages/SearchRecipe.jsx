import React, { useState } from "react";
import { Link } from "react-router-dom";
import useRecipes from "../hooks/useRecipe";

function SearchRecipe({ favourites, setFavourites }) {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  const { data, loading, error } = useRecipes(query);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchInput.trim()) {
      return;
    }

    setQuery(searchInput);
  };

  const addToFavourites = (recipe) => {
    const alreadyAdded = favourites.some(
      (item) => item.idMeal === recipe.idMeal,
    );

    if (!alreadyAdded) {
      setFavourites([...favourites, recipe]);
    }
  };

  const isFavourite = (id) => {
    return favourites.some((item) => item.idMeal === id);
  };

  return (
    <div>
      <h1 className="mb-4">Search Recipes</h1>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a recipe..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />

              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

     {/* Loading  */}
      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary"></div>
          <p className="mt-2">Loading recipes...</p>
        </div>
      )}

      {/* Error */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* No Results */}
      {!loading && query && data.length === 0 && !error && (
        <div className="alert alert-warning">No recipes found.</div>
      )}

      {/* Recipe Cards */}
      <div className="row g-4">
        {data.map((recipe) => (
          <div className="col-md-6 col-lg-4" key={recipe.idMeal}>
            <div className="card h-100 shadow-sm">
              <img
                src={recipe.strMealThumb}
                className="card-img-top"
                alt={recipe.strMeal}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{recipe.strMeal}</h5>

                <p className="card-text">
                  <strong>Category:</strong> {recipe.strCategory}
                </p>

                <p className="card-text">
                  <strong>Area:</strong> {recipe.strArea}
                </p>

                <div className="mt-auto">
                  <Link
                    to={`/recipes/${recipe.idMeal}`}
                    className="btn btn-primary me-2"
                  >
                    View Details
                  </Link>

                  <button
                    className={`btn ${
                      isFavourite(recipe.idMeal)
                        ? "btn-success"
                        : "btn-outline-danger"
                    }`}
                    onClick={() => addToFavourites(recipe)}
                    disabled={isFavourite(recipe.idMeal)}
                  >
                    {isFavourite(recipe.idMeal) ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchRecipe;
