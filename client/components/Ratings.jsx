import React from 'react';
import StarRating from './StarRating.jsx'


export default class Ratings extends React.Component {
  constructor() {
    super();
    this.state = {};
  };

  componentDidMount() {
    console.log("ratings")
  };

  render() {
    return (
      <div>
        <h1>Ratings & Reviews</h1>
        <StarRating />
      </div>
    )
  }
};
