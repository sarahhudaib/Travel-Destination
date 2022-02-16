import React from "react";
import { Link } from "react-router-dom";
import Tour from "./tour/Tour";
// import "./Tours.css";

const Tours = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((tour) => (
        <div className="tour-preview" key={tour.id}>
          <Link to={`/tour/${tour.id}`}>
            <Tour tour={tour} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Tours;
