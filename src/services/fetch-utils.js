import { checkError, client } from './client';

//boiler plate sign in and up page. Also for getting the user

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

// ----------------------------------------------

export async function getLeaves() {
  const response = await client.from('leaf').select();
  return checkError(response);
}

export async function getSingleLeaf(id) {
  const response = await client.from('leaf').select().match({ id }).single();
  return checkError(response);
}
