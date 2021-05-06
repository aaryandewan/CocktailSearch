import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("rose");
  const [cocktails, setCocktails] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(`${url}${searchTerm}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks) {
      const newCocktails = drinks.map((cocktail) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
        } = cocktail;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          isAlcoholic: strAlcoholic,
          glass: strGlass,
        };
      });
      setCocktails(newCocktails);
    } else setCocktails([]);
    setLoading(false);
    console.log(data);
    try {
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
