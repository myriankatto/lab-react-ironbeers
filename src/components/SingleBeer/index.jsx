import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const SingleBeer = props => {
  return (
    <Link to={`/beers/${props._id}`}>
      <div className="beer__single">
        <figure>
          {' '}
          <img src={props.image_url} alt={props.name} />
        </figure>
        <div className="beer__single__info">
          <h1>{props.name}</h1>
          <span>{props.tagline}</span>
          <small>Created by: {props.contributed_by}</small>
        </div>
      </div>
    </Link>
  );
};

export default SingleBeer;
