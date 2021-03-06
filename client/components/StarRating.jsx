import React from "react";
import StarRatings from 'react-star-ratings';



const StarRating = () => {

    return (
        <div className="left-container">
            <p className='stars-in-numbers'>3.5</p>
            <div className="star-rating">
                <StarRatings
                    rating={3.5}
                    name='rating'
                    starDimension="30px"
                    starSpacing="1px"
                    starRatedColor="orange"
                    numberOfStars={5}
                /></div>
            <p>100% of reviews recommend this product </p>
            <div>
                <div className='scoreBar-container'>
                    <p className='index'>5 stars</p>
                    <div className="scoreBar">
                        <div className="skills stars5"></div>
                    </div>
                </div>

                <div className='scoreBar-container'>
                    <p className='index'>4 stars</p>
                    <div className="scoreBar">
                        <div className="skills stars4"></div>
                    </div>
                </div>

                <div className='scoreBar-container'>
                    <p className='index'>3 stars</p>
                    <div className="scoreBar">
                        <div className="skills stars3"></div>
                    </div>
                </div>

                <div className='scoreBar-container'>
                    <p className='index'>2 stars</p>
                    <div className="scoreBar">
                        <div className="skills stars2"></div>
                    </div>
                </div>

                <div className='scoreBar-container'>
                    <p className='index'>1 stars</p>
                    <div className="scoreBar">
                        <div className="skills stars1"></div>
                    </div>
                </div>

            </div>
            <br/><br/>
            <div>
                <div className="slidecontainer">
                    <p className='sliderP'>Size</p>
                    <input type="range" min="1" max="100" className="slider" id="myRange"></input>
                </div>
                <br/>
                <div className="slidecontainer">
                    <p className='sliderP'>Comfort</p>
                    <input type="range" min="1" max="100" className="slider" id="myRange"></input>
                </div>
            </div>
        </div>
    )
}

export default StarRating;