import React from 'react';
import { Link } from 'react-router-dom';

export default function Leaf({ id, type, description }) {
  return (
    <Link to={`/leaves/${id}`}>
      <div>
        <p>{type}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
}
