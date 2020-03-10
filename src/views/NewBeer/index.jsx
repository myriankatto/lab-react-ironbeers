import React, { Component } from 'react';

import './style.scss';

import { add as addBeer } from './../../services/beers';

class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
      }
    };
  }

  fetchData() {
    addBeer(this.state.beer)
      .then(() => alert('Beer created'))
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      beer: { ...this.state.beer, [name]: value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchData();
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.beer.name}
            onChange={this.handleChange}
          />

          <label htmlFor="tagline-input">Tagline</label>
          <input
            type="text"
            name="tagline"
            placeholder="Tagline"
            value={this.state.beer.tagline}
            onChange={this.handleChange}
          />

          <label htmlFor="description-input">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.beer.description}
            onChange={this.handleChange}
          />

          <label htmlFor="first-brewed-input">First Brewed</label>
          <input
            type="text"
            name="first-brewed"
            placeholder="First Brewed"
            value={this.state.beer.first_brewed}
            onChange={this.handleChange}
          />

          <label htmlFor="brewers_tips-input">Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            placeholder="Brewers Tips"
            value={this.state.beer.brewers_tips}
            onChange={this.handleChange}
          />

          <label htmlFor="attenuation_level-input">Atenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            placeholder="Atenuation Level"
            value={this.state.beer.attenuation_level}
            onChange={this.handleChange}
          />

          <label htmlFor="contributed_by-input">Created By</label>
          <input
            type="text"
            name="contributed_by"
            placeholder="Creator name"
            value={this.state.beer.contributed_by}
            onChange={this.handleChange}
          />
          <button type="submit">Add New Beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
