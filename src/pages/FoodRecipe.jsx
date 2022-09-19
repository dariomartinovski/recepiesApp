import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Popular from '../components/Home/Popular';
import '../styles/FoodRecipe.css';

export default function FoodRecipe() {
  const [result, setResult] = useState({});
  let params = useParams();

  useEffect(()=>{
    getResult(params.id);
  },[params])

  const getResult = async (id) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const recipe = await data.json();
    setResult(recipe);
  }

  return (
    <>
      <div className='summary'>
        <img src={result?.image} alt='Food' />
        <div className='textArea'>
            <h2>{result?.title}</h2>
            <hr></hr>
            <p dangerouslySetInnerHTML={{__html: result?.summary}}></p>
        </div>
      </div>
      <div className='ingredients'>
          <ul>
              Ingredients:
              {result.extendedIngredients?.map((item,i) => {
                return(
                  <li key={i}>{item.original}</li>
                )
              })}
          </ul>
      </div>
      <div className='instructions'>
          <h4>Instructions: </h4>
          <p dangerouslySetInnerHTML={{__html: result?.instructions}}></p>
      </div>
      <Popular/>
    </>
  )
}
