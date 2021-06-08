import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/projekte">
              <ProjectsPage />
            </Route>
          </Switch>
          <nav>
            <ul>
              <li>
                <Link to="/">Startseite</Link>
              </li>
              <li>
                <Link to="/projekte">Meine Projekte</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
  );
}