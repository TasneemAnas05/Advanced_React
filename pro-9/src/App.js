import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export  default function App() {
  //restaurantName => holds the state
  //setRestaurantName => holds the state updating function
  const [restaurantName,setRestaurantName ]=useState('Lemon');
  function updateRestaurantName(){
    setRestaurantName("Little Lemon");
  }
  // console.log(restaurantName);
  return (
    <div>
        <h1>{restaurantName}</h1>
        <button onClick={updateRestaurantName}>
          update Restaurant Name
        </button>
    </div>
  );
  
}
