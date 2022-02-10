import logo from './logo.svg';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';

import './App.css';
import { useState } from 'react';

function App() {
  const [validUser, setValidUser] = useState(localStorage.getItem('supabase.auth.token'));
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route>
            {
              validUser
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
