import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import SearchRecipe from "./pages/SearchRecipe";
import RecipeDetail from "./pages/RecipeDetail";
import Favourites from "./pages/Favourites";

function App() {
  const [favourites, setFavourites] = useState([]);

  return (
    <div className="d-flex">
      <Sidebar />

      <main className="flex-grow-1 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/recipes"
            element={
              <SearchRecipe
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />

          <Route
            path="/recipes/:id"
            element={
              <RecipeDetail
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />

          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
