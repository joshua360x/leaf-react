import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getSingleLeaf } from './services/fetch-utils';

export default function Details() {
  const [leaf, setLeaf] = useState({});
  let { age, type, rating } = leaf;

  const { id } = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSingleLeaf(id);
      setLeaf(data);
    }
    onLoad();
  }, [id]);
  return (
    <div className='details'>
      <h2>This leaf is a {type}</h2>
      <p>I am {age} years old</p>
      <p>Most People give me a {rating} out 5 rating</p>
    </div>
  );
}
