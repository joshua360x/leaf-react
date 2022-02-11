import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleLeaf } from './services/fetch-utils';

export default function UpdateLeaf() {
  const [age, setAge] = useState(1);
  const [season, setSeason] = useState('fall');
  const [type, setType] = useState('round');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSingleLeaf(id);
      const { age, season, type, description, rating } = data;
      setAge(age);
      setSeason(season);
      setType(type);
      setDescription(description);
      setRating(rating);
    }
    onLoad();
  }, [id]);

  return (
    <form className="update">
      <h2>Hey You are about to Update Your Leaf </h2>
      <label>
        Age of Your Leaf
        <input value={age} onChange={(e) => setAge(e.target.value)} type="number" />
      </label>
      <label>
        Season of Your Leaf
        <select value={season} onChange={(e) => setSeason(e.target.value)}>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
        </select>
      </label>
      <label>
        Type of Leaf
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="round">Round</option>
          <option value="smooth">Smooth</option>
          <option value="heart">Heart</option>
          <option value="needle">Needle</option>
        </select>
      </label>
      <label className="needDescript">
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the Leaf..."
          type="text"
        />
      </label>
      <label>
        Rating
        <input
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          type="number"
          min="1"
          max="5"
        />
      </label>
      <button>Update Leaf</button>
    </form>
  );
}
