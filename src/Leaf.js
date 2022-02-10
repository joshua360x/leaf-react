import React from 'react';

export default function Leaf({ age, season, type, description, rating }) {
  return <div>
    <p>{type}</p>
    <p>{season}</p>
    <p>{description}</p>
    <p>{age}</p>
    <p>{rating}</p>
  </div>;
}
