import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './Home'
import Food from './Food';
import Cocktails from './Cocktails';
import Searched from './Searched';
import FoodRecipe from './FoodRecipe';
import CocktailRecipe from './CocktailRecipe';

export default function Pages({searchFilter}) {
  return (
    <Routes>
      <Route path='/recepiesApp' element={<Home/>}/>
      <Route path='/recepiesApp/foods' element={<Food/>}/>
      <Route path='/recepiesApp/cocktails' element={<Cocktails />}/>
      <Route path='/recepiesApp/search/:search' element={<Searched searchFilter={searchFilter}/>}/>
      <Route path='/recepiesApp/recipe/:id' element={<FoodRecipe/>}/>
      <Route path='/recepiesApp/cocktail/:id' element={<CocktailRecipe/>}/>
    </Routes>
  )
}
