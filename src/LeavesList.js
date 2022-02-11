import React, { useEffect, useState } from 'react';
import Leaf from './Leaf';
import { getLeaves } from './services/fetch-utils';

export default function LeavesList() {
  const [leaves, setLeaves] = useState([]);

  // useEffect(() => {
  //   async function onLoad() {
  //     let controller = new AbortController();

  //     const data = await getLeaves();
  //     setLeaves(data);
  //   }
  //   onLoad();
  // }, [leaves]);

  useEffect(() => {
    let controller = new AbortController();
    (async () => {
      try {
        const response = await getLeaves();
        setLeaves(response);
        controller = null;
      } catch (e) {
        // Handle fetch error
      }
    })();
    return () => controller?.abort();
  }, [leaves]);

  return (
    <div className="leaf-list">
      {leaves.map((leaf, i) => (
        <Leaf key={leaf + i} {...leaf} />
      ))}
    </div>
  );
}
