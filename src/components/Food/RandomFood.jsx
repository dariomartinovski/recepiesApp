import React, { useEffect, useState } from 'react';
import '../../styles/Food.css';
import {Link} from 'react-router-dom';

export default function RandomFood() {
    const [randomRecepies, setRandomRecepies] = useState([]);

    useEffect(()=>{
        getRandomRecepies();
    },[])

    const getRandomRecepies = async () => {
        const localStorageData = localStorage.getItem("randomRecepies");
        if(localStorageData)
          setRandomRecepies(JSON.parse(localStorageData));
        else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`);
          const data = await api.json();
          localStorage.setItem("randomRecepies",JSON.stringify(data.recipes));
          setRandomRecepies(data.recipes);
        }
      } 

  return (
    <section className="randomFood">
        {randomRecepies.map((item,i) => {
          return(
            (i===4 || i===3)?(
              <div className="randomFoodItem" key={item.id}>
                <Link to={'/recepiesApp/recipe/'+item.id}>
                  <div className="gradient"></div>
                </Link>
                <img src={item.image} alt={item.title} />
                <div>
                {item.cookingMinutes>0 && <div>Ready in {item.cookingMinutes} minutes</div>}
                  <h4>{item.title}</h4>
                  <div>Price per serving: {item.pricePerServing}$</div>
                  <div>Servings: {item.servings}</div>
                  {item.diets.length!==0 && (
                    <ul>
                      Diets:
                      {item.diets?.map((itm,j) => {
                        return(
                          j<4?(
                            <li key={j}>{itm}</li>
                          ):null
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            ):(
              <div className="randomFoodItem" key={item.id}>
                <Link to={'/recepiesApp/recipe/'+item.id}>
                  <img src={item.image} alt={item.title} />
                </Link>
                <h4>{item.title}</h4>
             </div>
            )
          );
        })}
      </section>
  )
}
