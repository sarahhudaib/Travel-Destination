import React, { useState } from 'react';
import './TourDetails.css';
import { useParams } from "react-router-dom";

function TourDetails(props) {
  const { id } = useParams();
  const { name, info, image, price } =
  props.data.find(elementById => 
    elementById.id === id);

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

        <p className={moreMode ? "" : "doMore"}>{info}</p>

        <div onClick={() => setMoreMode(Available => !Available)} className="showText"> 
               {moreMode ? "Show Less" : "Show More"}
        </div>
      </div>
   
  );
}

export default TourDetails