import React from 'react';
import poster from '../../assets/poster.jpg'
import "./Movie.css"

const Movie = () => {
    return (

        <div className="result">
            <div className="result--wrapper">
                <figure className="poster__wrapper">
                    <img src={poster} alt="" class="poster" />
                </figure>
                <div class="result__description">
                    <p className="result__title"> Title </p>
                    <p className="result__year"> Year </p>
                    <p className="result__type"> Type </p>
                    <p className="result__imdb"> IMBD </p>
                </div>
            </div>
        </div>

    );
}

export default Movie;
