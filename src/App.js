import logo from './logo.svg';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';

import './App.css';
import Auth from './Auth';
import { useState } from 'react';

function App() {
  const [validUser, setValidUser] = useState(localStorage.getItem('supabase.auth.token'));
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact to="/">
            {
              validUser ? <Redirect exact to="/leaf-list" /> : <Auth setValidUser={setValidUser} />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
