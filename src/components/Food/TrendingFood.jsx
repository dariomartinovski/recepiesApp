import React, { useEffect, useState } from 'react';
import '../../styles/Food.css';
import {Link} from 'react-router-dom';

export default function TrendingFood() {
  const [popular ,setPopular] = useState([]);

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
      setPopular(data.recipes); //only gonna use 5
    }
  }   
  return (
    <section className="newsAndTrending">
        <div className="wave wave2"></div>
        <h1 className="title">News 'n Trending</h1>
        {popular.map((item,i)=>{
          return(
            i<5?(
              <div className={i===4?"trendingItem":"trendingItem"} key={item.id}>
                <Link to={'/recipe/'+item.id}>
                  <img src={item.image} alt={item.title} />
                </Link>
                <h4>{item.title}, likes: {item.aggregateLikes}</h4>
              </div>
            ):null
          );
        })}
        <div className="wave wave3"></div>
      </section>
  )
}
