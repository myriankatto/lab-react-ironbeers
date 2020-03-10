import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss'

class Home extends Component {
  render() {
    return (
      <div className="beer__home">
       <Link className="beer-box" to="/beers">Beers List</Link>
       <Link className="beer-box" to="/random-beer">Random Beer</Link>
       <Link className="beer-box" to="/new-beer">New Beer</Link>

      </div>
    );
  }
}

export default Home;
