import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  const getCocktail = async () => {
    try {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();

      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: isAlcoholic,
          strCategory: category,
          strGlass: glass,
          strInstructions: Instructions,
        } = data.drinks[0];
        const newCocktail = {
          name,
          image,
          isAlcoholic,
          category,
          glass,
          Instructions,
        };

        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);

      console.log(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    setLoading(true);
    getCocktail();
  }, [id]);

  if (loading) return <Loading />;
  if (!cocktail) {
    return <h2>No Cocktail</h2>;
  }

  const { name, image, isAlcoholic, category, glass, Instructions } = cocktail;

  return (
    <section className="section cocktail-section">
      <Link className="btn btn-primary" to="/">
        Back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Is Alcoholic?</span>
            {isAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
