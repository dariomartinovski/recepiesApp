import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function FeaturedCocktails() {
  const [featuredCocktails, setFeaturedCocktails] = useState([]);

  useEffect(()=>{
    getFeaturedCocktails();
  },[])

  const getFeaturedCocktails = async () => {
    const localStorageData = localStorage.getItem("featuredCocktails");
    if(localStorageData)
      setFeaturedCocktails(JSON.parse(localStorageData));
    else{
      let arr=[];
      for(let i=0;i<5;i++){
        const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const data = await api.json();
        arr.push(data.drinks[0]);
      }
      localStorage.setItem("featuredCocktails",JSON.stringify(arr));
      setFeaturedCocktails(arr);
    }
  }   
  return (
    <div className='featuredCocktails'>
        {featuredCocktails.map((item,i) => {
            return(
                <Link to={'/recepiesApp/cocktail/'+item.idDrink} key={i}>
                  <div className='featuredCocktail'>
                    <img src={item.strDrinkThumb} alt={item.strDrink} />
                  </div>
                </Link>
            );
        })}
    </div>
  )
}
