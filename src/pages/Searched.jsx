import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Searched.css';
import {Link} from 'react-router-dom';

export default function Searched({searchFilter}) {
    const [searched , setSearched] = useState([]);
    const [currentFilter, setCurrentFitler] = useState("");

    let params = useParams();

    useEffect(()=>{
      setCurrentFitler(searchFilter);
      setSearched([]);
      if(searchFilter==="Food")
        getFoodSearch(params.search);
      else
        getCocktailSeach(params.search); 
      // eslint-disable-next-line
    },[params.search])

    useEffect(()=>{console.log(searched)},[searched])

    const getFoodSearch = async (name) =>{
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const recipes = await data.json();
        setSearched(recipes.results);
    }

    const getCocktailSeach = async (name) => {
      const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
      const cocktails = await data.json();
      setSearched(cocktails.drinks); 
    }

  return (
    <>
      {(searched.length===0 || searched===null)?(
          <div className='resultNotFound'>
            <h2>There are no results found with the keyword {params.search}</h2>
          </div>
        ):(
          currentFilter==="Food"?(
            <div className='searchContainer'>
              {searched?.map(item => {
                return(
                    <div className='searchFoodItem searchItem' key={item.id}>
                        <Link to={"/recepiesApp/recipe/"+item.id}>
                          <img src={item.image} alt={item.title} />
                        </Link>
                        <h4>{item.title}</h4>
                    </div>
                );
              })}
            </div>
          ):(
            <div className="searchContainer">
              {searched?.map(item => {
                return(
                    <div className='searchItem' key={item.idDrink}>
                        <Link to={"/recepiesApp/cocktail/"+item.idDrink}>
                          <img src={item.strDrinkThumb} alt={item.strDrink} />
                        </Link>
                        <h4>{item.strDrink}</h4>
                    </div>
                );
              })}
            </div>
          )          
        )}
    </>    
  )
}
