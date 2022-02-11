import React from 'react';
import { Link } from 'react-router-dom';

export default function Leaf({ id, type, description }) {
  return (
    <div className="leaf">
      <Link to={`/leaves/${id}`}>
        <p>{type}</p>
        <p>{description}</p>
      </Link>
      <button className="update btn-special">Update</button>
      <button className="delete btn-special">Delete</button>
    </div>
  );
}
