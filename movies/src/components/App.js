import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import MoviesList from '../features/movies/MoviesList';
import MovieDetails from '../features/movies/MovieDetails';

import 'bootstrap/dist/css/bootstrap.css';

function App(test) { 
  return (
    <div className="container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/movies" component={MoviesList} />
            <Route exact path="/movies/:movieId" component={MovieDetails} />
            <Route exact path="/" component={() => <h1>Homepage</h1>} />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </Router>
    </div>
  );
}

// Default export
export default App;
