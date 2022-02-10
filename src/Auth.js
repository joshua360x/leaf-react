import React, { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function Auth({ setValidUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    const user = await signIn(email, password);
    setValidUser(user);
  }

  async function handleSignUp() {
    const user = await signUp(email, password);
    setValidUser(user);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
        </label>
        <label>
          Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
