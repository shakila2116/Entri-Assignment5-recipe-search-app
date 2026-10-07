import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipeDetail({ favourites, setFavourites }) {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );

        setRecipe(response.data.meals[0]);
      } catch (error) {
        setError("Failed to load recipe.");
      }

      setLoading(false);
    }

    getRecipe();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  function saveFavourite() {
    setFavourites([...favourites, recipe]);
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>

      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />

      <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>

      <p>
        <strong>Area:</strong> {recipe.strArea}
      </p>

      <h3>Instructions</h3>

      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetail;
