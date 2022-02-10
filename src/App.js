import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';

import './App.css';
import Auth from './Auth';
import LeavesList from './LeavesList';
import CreateLeaf from './CreateLeaf';
import { logout } from './services/fetch-utils';
import { useState } from 'react';
import Details from './Details';
import NotFound from './NotFound';

function App() {
  const [validUser, setValidUser] = useState(localStorage.getItem('supabase.auth.token'));
  return (
    <Router>
      <div className="App">
        {validUser && (
          <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create-leaf">Create</NavLink>
            <button onClick={logout}>Logout</button>
          </header>
        )}

        <main>
          <Switch>
            <Route exact to="/">
              {validUser ? <Redirect exact to="/leaves" /> : <Auth setValidUser={setValidUser} />}
            </Route>
            <Route exact to="/leaves">
              {validUser ? <LeavesList /> : <Redirect to="/" />}
            </Route>

            <Route exact to="/create-leaf">
              {validUser ? <CreateLeaf /> : <Redirect to="/" />}
            </Route>

            <Route exact to="/leaves/:id">
              {validUser ? <Details /> : <Redirect to="/" />}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
