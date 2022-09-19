import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CocktailRecipe.css';

export default function CocktailRecipe() {
  const [result, setResult] = useState({});
  let params = useParams();

  useEffect(()=>{
    getResult(params.id);
  },[params])

  const getResult = async (id) => {
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const cocktail = await data.json();
    setResult(cocktail.drinks[0]);
  }

  return (
        <>
        <div className='cocktailSummary'>
          <img src={result?.strDrinkThumb} alt={result.strDrink} />
          <div className='textArea'>
              <h2>{result?.strDrink}</h2>
              <hr></hr>
              <h4>Ingredients:</h4>
              <ul>
                {result.strIngredient1 && <li>{result.strIngredient1} - {result.strMeasure1}</li>}
                {result.strIngredient2 && <li>{result.strIngredient2} - {result.strMeasure2}</li>}
                {result.strIngredient3 && <li>{result.strIngredient3} - {result.strMeasure3}</li>}
                {result.strIngredient4 && <li>{result.strIngredient4} - {result.strMeasure4}</li>}
                {result.strIngredient5 && <li>{result.strIngredient5} - {result.strMeasure5}</li>}
                {result.strIngredient6 && <li>{result.strIngredient6} - {result.strMeasure6}</li>}
                {result.strIngredient7 && <li>{result.strIngredient7} - {result.strMeasure7}</li>}
                {result.strIngredient8 && <li>{result.strIngredient8} - {result.strMeasure8}</li>}
                {result.strIngredient9 && <li>{result.strIngredient9} - {result.strMeasure9}</li>}
                {result.strIngredient10 && <li>{result.strIngredient10} - {result.strMeasure10}</li>}
                {result.strIngredient11 && <li>{result.strIngredient11} - {result.strMeasure11}</li>}
                {result.strIngredient12 && <li>{result.strIngredient12} - {result.strMeasure12}</li>}
                {result.strIngredient13 && <li>{result.strIngredient13} - {result.strMeasure13}</li>}
                {result.strIngredient14 && <li>{result.strIngredient14} - {result.strMeasure14}</li>}
                {result.strIngredient15 && <li>{result.strIngredient15} - {result.strMeasure15}</li>}
            </ul>
            <hr />
            <h4>Instructions: </h4>
            <p>{result.strInstructions}</p>
          </div>
        </div>
      </>
  )
}

