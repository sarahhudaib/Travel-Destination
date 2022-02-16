import React from 'react';
// import './Tour.css';

 const Tour=({tour}) =>{
   console.log(tour);
  return (
    <div>
     <h2>{tour.name}</h2>
     <h2>{tour.info}</h2>
     <div>
     <img src={tour.image} alt=""/>
     </div>
    </div>
  );
}
export default Tour;