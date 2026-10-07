import { useEffect, useState } from "react";
import axios from "axios";

function useRecipe(searchTerm) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        if (!searchTerm) {
            setData([]);
            return;
        }
        async function fetchRecipes() {
            try {
                setLoading(true);
                setError("");
                const response = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`

                );
                setData(response.data.meals);
                setLoading(false);
            } catch (error) {
                setError("Something went wrong while fetching recipes.");
            }
        }
        fetchRecipes();



    }, [searchTerm]);
    return { data, loading, error };

}

export default useRecipe
