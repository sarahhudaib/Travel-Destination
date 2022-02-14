import React from 'react';
import './Tour.css';

export default function Tour({ name, image }) {

  return (
    <div>
      <div>
        <img src={image} alt=""/>
      </div>

      <p>
        {name}
      </p>
    </div>
  );
}