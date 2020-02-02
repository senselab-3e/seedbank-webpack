import React from 'react';
import cup from './assets/img/cup.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <div>
      <nav>
        <img class= "Cup-placeholder" src ={cup} alt='placeholderimage'></img>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/entryway">EntryWay</Link>
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
        <Route path="/entryway">
          <EntryWay />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

// function EntryWay() {
// return <h2>EntryWay</h2>;
// }
function Home() {
  return <h2>Home</h2>;
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

  function EntryWay() {
    let { path, url } = useRouteMatch();
    return (
      <div>
        <h2>EntryWay</h2>
  
        <ul>
          <li>
            <Link to={`${url}/auth`}>Authorization Page</Link>
          </li>
          <li>
            <Link to={`${url}/events`}>
              Props v. State
            </Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route exact path={path}>
            <h3>please select path</h3>
          </Route>
          <Route path={`${path}/:entryId`}>
            <Entry />
          </Route>
        </Switch>
      </div>
    );
  }

  function Entry() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { entryId } = useParams();
  
    return (
      <div>
        <h3>{entryId}</h3>
      </div>
    );
  }