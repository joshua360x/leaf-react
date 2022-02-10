import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getSingleLeaf } from './services/fetch-utils';

export default function Details() {
  const [leaf, setLeaf] = useState({});


  const { id } = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSingleLeaf(id);
      setLeaf(data);
    }
    onLoad();
  }, [id]);
  return (
    <div>
      <p>{leaf.age}</p>
    </div>
  );
}
