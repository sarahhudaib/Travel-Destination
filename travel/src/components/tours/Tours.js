import React from 'react';
import Data from "../../data/db";
import './Tours.css';

function Tours() {

  return (
      <div>
        {
        Data.map((d, i) => {
          const { name, image } = d;

          return (
            <div>
              <div>
                <img src={image} alt="" />
              </div>

              <p>
                {`${i + 1}- ${name}`}
              </p>
            </div>
          )
        }
        )
        }
      </div>
  );
}


export default Tours;