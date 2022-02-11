import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';

import './App.css';
import Auth from './Auth';
import LeavesList from './LeavesList';
import CreateLeaf from './CreateLeaf';
import { logout } from './services/fetch-utils';
import { useState } from 'react';
import Details from './Details';
import NotFound from './NotFound';
import UpdateLeaf from './UpdateLeaf';

function App() {
  const [validUser, setValidUser] = useState(localStorage.getItem('supabase.auth.token'));
  return (
    <Router>
      <div className="App">
        {validUser && (
          <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create-leaf">Create</NavLink>
            <NavLink to="/update-leaf">Update</NavLink>
            <button onClick={logout}>Logout</button>
          </header>
        )}

        <main>
          <Switch>
            <Route exact path="/">
              {validUser ? <Redirect exact to="/leaves" /> : <Auth setValidUser={setValidUser} />}
            </Route>
            <Route exact path="/leaves">
              {validUser ? <LeavesList /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/create-leaf">
              {validUser ? <CreateLeaf /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/update-leaf">
              {validUser ? <UpdateLeaf /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/leaves/:id">
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
