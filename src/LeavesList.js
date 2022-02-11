import React, { useEffect, useState } from 'react';
import Leaf from './Leaf';
import { getLeaves } from './services/fetch-utils';

export default function LeavesList() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    async function onLoad() {
      const data = await getLeaves();
      setLeaves(data);
    }
    onLoad();
  }, [leaves]);
  return <div className='leaf-list'>
    {
      leaves.map((leaf, i) => <Leaf key={leaf + i} {...leaf} />)
    }
  </div>;
}
