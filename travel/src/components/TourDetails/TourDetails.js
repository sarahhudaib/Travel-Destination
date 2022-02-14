import React, { useState } from 'react';
import './TourDetails.css';
import { useParams } from "react-router-dom";

export default function TourDetails(props) {
  const { id } = useParams();
  const { name, info, image, price } =
  props.Data.find(elementById => 
    elementById.id === id);
// rendering the information of this tour 
  const [moreMode, setMoreMode] = useState(false);

  return (
    
      <div>
        <img src={image} alt=""/>

        <h2>
          {name}
        </h2>

        <h4>
          {`Price $${price}`}
        </h4>

        <p className={moreMode ? "" : "do more"}>{info}</p>

        <div onClick={() => setMoreMode(Available => !Available)}> 
               {moreMode ? "Show Less" : "Show More"}
        </div>
      </div>
   
  );
}