import React, { Component } from 'react';

import './style.scss';

class NewBeer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  
  render() {
    return (
      <div>
        <form className="form">
          <label for="name-input">Name</label>
          <input type="text" name="name" placeholder="Name" />

          <label for="tagline-input">Tagline</label>
          <input type="text" name="tagline" placeholder="Tagline" />

          <label for="description-input">Description</label>
          <textarea type="text" name="description" placeholder="Description" />

          <label for="first-brewed-input">First Brewed</label>
          <input type="text" name="first-brewed" placeholder="First Brewed" />

          <label for="brewers_tips-input">Brewers Tips</label>
          <input type="text" name="brewers_tips" placeholder="Brewers Tips" />

          <label for="attenuation_level-input">Atenuation Level</label>
          <input type="number" name="attenuation_level" placeholder="Atenuation Level" />

          <label for="contributed_by-input">Created By</label>
          <input type="text" name="contributed_by" placeholder="Creator name" />
          <button>Add New Beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
