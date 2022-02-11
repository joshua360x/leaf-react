import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createLeaf } from './services/fetch-utils';

export default function CreateLeaf() {
  const [age, setAge] = useState(1);
  const [season, setSeason] = useState('fall');
  const [type, setType] = useState('round');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(1);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const leaf = {
      age,
      season,
      type,
      description,
      rating
    };
    await createLeaf(leaf);

    history.push('/leaves');

  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <label>
        Age of Your Leaf
        <input value={age} onChange={(e) => setAge(e.target.value)} type="number" />
      </label>
      <label>
        Season of Your Leaf
        <select value={season} onChange={(e) => setSeason(e.target.value)}>
          <option defaultValue="fall" value="fall">
            Fall
          </option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
        </select>
      </label>
      <label>
        Type of Leaf
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option defaultValue="round" value="round">
            Round
          </option>
          <option value="smooth">Smooth</option>
          <option value="heart">Heart</option>
          <option value="needle">Needle</option>
        </select>
      </label>
      <label className='needDescript'>
        Description
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Describe the Leaf...' type="text" />
      </label>
      <label>
        Rating
        <input value={rating} onChange={(e) => setRating(e.target.value)} type="number" min="1" max="5" />
      </label>
      <button>Create Leaf</button>
    </form>
  );
}
