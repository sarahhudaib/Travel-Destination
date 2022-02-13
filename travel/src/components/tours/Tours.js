import React from 'react';
import './Tours.css';

export default function Tours(props) {
  return (
    <>
      {props.data.map((toursProps) => {
        return (
          <>
            <div>
              Name : {toursProps.name}
             </div>
             <div>
            <img src={toursProps.image} alt=' ' />
            </div>
            <>
           
            </>
         
          </>
        );
      })}
    </>
  );
}


 