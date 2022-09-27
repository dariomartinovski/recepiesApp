import React, { useState,useEffect } from 'react';
import '../../styles/Recomendation.css';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import {Link} from 'react-router-dom';

export default function Recomendation() {
  const [recomendation, setRecomendation] = useState([]);

    useEffect(()=>{
      getRecomendation();
    },[])

    const getRecomendation = async () => {
      const localStorageData = localStorage.getItem("recomendation");
      if(localStorageData)
        setRecomendation(JSON.parse(localStorageData));
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`);
        const data = await api.json(); //modify call no maxReadyTIme  the call doesnt work
        localStorage.setItem("recomendation",JSON.stringify(data.recipes));
        setRecomendation(data.recipes);
      }
    }     

  return (
    <div className='recomendation'>
      <h1>OUR TOP FIVE QUICK 'N EASY MEAL CHOICES</h1>
      <Splide options={{
        type: 'loop',
        wheel: true,
        perPage: 1,
        perMove: 1,
      }}>
        {recomendation?.map(item => {
          return (
            <SplideSlide key={item.id}>
              <Link to={"/recepiesApp/recipe/"+item.id}>
                <div className="recomendationItem">
                    <div className="gradient"></div>
                    <h3>{item.title}</h3>
                    <img src={item.image} alt={item.title} />
                </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  )
}
