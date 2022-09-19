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
      <Route path='/' element={<Home/>}/>
      <Route path='/foods' element={<Food/>}/>
      <Route path='/cocktails' element={<Cocktails />}/>
      <Route path='/search/:search' element={<Searched searchFilter={searchFilter}/>}/>
      <Route path='/recipe/:id' element={<FoodRecipe/>}/>
      <Route path='/cocktail/:id' element={<CocktailRecipe/>}/>
    </Routes>
  )
}
