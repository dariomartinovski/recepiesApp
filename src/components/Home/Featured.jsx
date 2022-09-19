import React, { useEffect, useState } from 'react';
import '../../styles/Featured.css';
import {Link} from 'react-router-dom';

export default function Featured() {
    const [featured, setFeatured] = useState([]);

    useEffect(()=>{
        getFeatured();
    },[])

    const getFeatured = async () => {
        const localStorageData = localStorage.getItem("featured");
        if(localStorageData)
            setFeatured(JSON.parse(localStorageData));
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=3&sort=popularity&type=main course`);
            const data = await api.json();
            console.log(data);
            localStorage.setItem("featured",JSON.stringify(data.recipes));
            setFeatured(data.recipes);
        }
    }   
  return (
    <div className='featuredContainer'>
        <h2 className='title'>Daily picks</h2>
        {featured.map((item,i) => {
          return(
            <div key={item.id} className="featuredItem">
                <div className='textPart'>
                    <h3>{item.title}</h3>
                    {item.cookingMinutes>0 && <div>Ready in {item.cookingMinutes} minutes</div>}
                    <div>Price per serving {item.pricePerServing}$</div>
                    <div>Servings: {item.servings}</div>
                    <ul>
                        Diets:
                        {item.diets.map((itm,i)=>{return (<li key={i}>{itm}</li>);})}
                    </ul>
                </div>
                <Link to={'/recipe/'+item.id}>
                    <img src={item.image} alt={item.title} />
                </Link>
            </div>
          );
        })}
    </div>
  )
}
