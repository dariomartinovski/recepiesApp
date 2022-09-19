import React, {useState, useEffect} from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide'; 
import '@splidejs/react-splide/css/sea-green';
import { Link } from 'react-router-dom';

export default function PopularCocktail() {
    const [popularCocktails, setPopularCocktails] = useState([]);
  useEffect(()=>{
    getCocktail();
  },[])

  const getCocktail = async () => {
    const localStorageData = localStorage.getItem("popularCocktails");
    if(localStorageData)
      setPopularCocktails(JSON.parse(localStorageData));
    else{
      let arr=[];
      for(let i=0;i<8;i++){
        const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const data = await api.json();
        arr.push(data.drinks[0]);
      }
      localStorage.setItem("popularCocktails",JSON.stringify(arr));
      setPopularCocktails(arr);
    }
  }   
  
  return (
    <div className='cocktailsCarosell'>
      <h2>Popular</h2>
      <Splide options={{ //https://splidejs.com/integration/react-splide/ see here
          type: 'loop',
          perPage: 4,
          perMove: 1,
          gap: '2rem',
        }}>
        {popularCocktails?.map(item => {
          return(
            <SplideSlide key={item.idDrink}>
              <div className="cocktailItem">
                <Link to={'/cocktail/'+item.idDrink}>
                  <div className="gradient"></div>
                </Link>
                <h4>{item.strDrink}</h4>
                <img src={item.strDrinkThumb} alt={item.strDrink} />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  )
}
