import React from 'react';
import { Link } from 'react-router-dom';

export default function Leaf({ id, age, season, type, description, rating }) {
  return (
    <Link to={`/leaves/${id}`}>
      <div>
        <p>{type}</p>
        <p>{season}</p>
        <p>{description}</p>
        <p>{age}</p>
        <p>{rating}</p>
      </div>
    </Link>
  );
}
