import React from 'react';
import cup from './assets/img/cup.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 function App() {
  return (
    <Router>
    <div>
      <nav>
        <img class= "Cup-placeholder" src ={cup} alt='placeholderimage'></img>
        <ul>
          <li>
            <Link to="/">EntryWay</Link>
          </li>
          <li>
            <Link to="/about3e">3E About</Link>
          </li>
          <li>
            <Link to="/oOoOs">404 oOoO Portal</Link>
          </li>
          <li>
            <Link to="/patches">Patches</Link>
          </li>
          <li>
            <Link to="/welcomewagon">WelcomeWagon</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about3e">
          <About />
        </Route>
        <Route path="/oOoOs">
          <oOoO />
        </Route>
        <Route path="/patches">
          <Patches />
        </Route>
        <Route path="/welcomewagon">
        <WelcomeWagon />
        </Route>
        <Route path="/">
          <EntryWay />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

function EntryWay() {
return <h2>EntryWay</h2>;
}

function About() {
return <h2>About</h2>;
}

function oOoO() {
return <h2>oOoO</h2>;
}

function WelcomeWagon() {
  return <h2>WelcomeWagon</h2>;
  }

function Patches() {
  return <h2>Patches</h2>;
  }



export default App;
