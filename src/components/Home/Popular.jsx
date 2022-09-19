import '../../styles/Popular.css';
import React, { useEffect, useState } from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide'; 
import '@splidejs/react-splide/css/sea-green';
import {Link} from 'react-router-dom';

export default function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(()=>{
      getPopular();
    },[])

    const getPopular = async () => {
      const localStorageData = localStorage.getItem("popular");
      if(localStorageData)
        setPopular(JSON.parse(localStorageData));
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&sort=popularity`);
        const data = await api.json();
        localStorage.setItem("popular",JSON.stringify(data.recipes));
        setPopular(data.recipes);
      }
    }   
  return (
    <div className='popularContainer'>
      <h2>Popular</h2>
      <Splide options={{ //https://splidejs.com/integration/react-splide/ see here
          type: 'loop',
          perPage: 3,
          perMove: 1,
          gap: '2rem',
        }}>
        {popular?.map(item => {
          return(
            <SplideSlide key={item.id}>
              <Link to={"/recipe/"+item.id}>
                <div className="popularItem">
                  <div className="gradient"></div>
                  <h4>{item.title}</h4>
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

/* <p dangerouslySetInnerHTML={{__html: item.summary}}></p> */

