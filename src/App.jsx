import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BeersListView from './views/BeersList';
import RandomBeerView from './views/RandomBeer';
import SingleBeerView from './views/SingleBeer';
import NewBeerView from './views/NewBeer';
import HomeView from './views/Home';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/beers" exact component={BeersListView} />
            <Route path="/random-beer" exact component={RandomBeerView} />
            <Route path="/beers/:id" exact component={SingleBeerView} />
            <Route path="/new-beer" exact component={NewBeerView} />
            <Route path="/" exact component={HomeView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
