import React, { useEffect, useState } from 'react';
import axios from 'axios';

import divider from '../assets/images/pattern-divider-desktop.svg';
import dice from '../assets/images/icon-dice.svg';

export const Card = () => {
  const [data, setData] = useState(null);

    //function to fetch data when the button is clicked
  const fetchRandomAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(response => {
        setData(response.data.slip);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchRandomAdvice(); // Fetch and set initial advice when component mounts
  }, []);

  return (
    <div className='relative card'>
      <p className='text-neonGreen tracking-widest'>ADVICE #{data?.id}</p>
      <h1 className='text-xl font-extrabold'>{`"${data?.advice}"`}</h1>
      <div className="divider">
        <img src={divider} alt="" />
      </div>
      <div className="button absolute bg-neonGreen p-5 rounded-full -bottom-7 flex items-center justify-center">
        <button onClick={fetchRandomAdvice}>
          <img src={dice} alt=""/>
        </button>
      </div>
    </div>
  );
};
