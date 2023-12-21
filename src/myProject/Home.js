// src/App.js

import React from 'react';
//import './App.css';
import ImageSlider from './ImageSlider';
import img1 from './styles/img1.webp';
import img2 from './styles/img2.webp';
import img3 from './styles/img3.webp';
import img4 from './styles/img4.webp';
function Home() {
  const images = [
    img1,img2,img3,img4
    // Add more image URLs as needed
  ];

  return (
    <div className="App">
      <ImageSlider images={images} />
    </div>
  );
}

export default Home;
