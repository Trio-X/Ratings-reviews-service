import React from "react";



const StarRating = () => {

    return (
        <div className="right-container">
            <p>248 Reviews, sorted by <u>relevance:</u></p>
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Helpful? <u>Yes</u> (10) | <u>Report</u></p>
            <hr></hr>
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
            <p>sunt in culpa qui officia deserunt mollit anim id est laborum, sed quia non numquam eius modi tempora.</p>
            <p>&#10004; I recommend this product</p>
            <div className="container-p">
                <p><b>Response:</b></p>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur</p>
            </div>
            <p>Helpful? <u>Yes</u> (9) | <u>Report</u></p>
            <hr></hr>
            <button className="button"><b>MORE REVIEWS</b></button>
            <button className="button"><b>ADD A REVIEW +</b></button>
        </div>
    )
}

export default StarRating;