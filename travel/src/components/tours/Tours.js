import React from 'react';
import './Tours.css';
import Tour from "./tour"
import { Link } from "react-router-dom";


export default function Tours(props) {

  return (
    <div>
      <p>Hello, Welcome to this app!</p>
      <div>
        {/* to create 3 new parameters (id, name & image) then store them inside state using props */}
        {props.data.map((state, index) => {
          const { id, name, image } = state;

        // pass the data to the <Tour/ tour={tour} > from data/db.json 
          return (
            <Link to={`/state/${id}`}>
              <Tour name={name} image={image} key={index} />
            </Link>
          )
        }
        )}
      </div>
    </div>
  );
}


// export default function Tours(props) {

//   return (
//      <div id="1">
//       <h1>
//         Hello, Welcome to this app!
//       </h1>
//      <div id="2">
//       {props.data.map((toursProps,i) => {
//         const id=toursProps;
//         return (
//           <>
//             <div>
//               Name : {toursProps.name}
//              </div>
//              <div>
//             <img src={toursProps.image} alt=' ' />
//             </div>
            
//             return (
//             <Link to={`/toursProps/${id}`}> <Tour key={i} /></Link>
//             )
//             </>

//         );
//       })}
//     </div>
//     </div>
//   );
// }


 