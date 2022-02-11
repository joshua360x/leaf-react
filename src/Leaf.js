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
      <Link className="updateLink" to={`/update-leaf/${id}`}>
        <button className="update btn-special">Update</button>
      </Link>
      <button onClick={() => deleteLeaf(id)} className="delete btn-special">
        Delete
      </button>
    </div>
  );
}
