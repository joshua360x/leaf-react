import React from 'react';
import { Link } from 'react-router-dom';
import { deleteLeaf } from './services/fetch-utils';
export default function Leaf({ id, type, description }) {
  return (
    <div className="leaf">
      <Link to={`/leaves/${id}`}>
        <p>{type}</p>
        <p>{description}</p>
      </Link>
      <button className="update btn-special">
        <Link className='updateLink' to={`/update-leaf/${id}`}>Update</Link>
      </button>
      <button onClick={() => deleteLeaf(id)} className="delete btn-special">Delete</button>
    </div>
  );
}
