import React from 'react';
import "./Movie.css"
import axios from 'axios';
import { useNavigate } from 'react-router';



const Movie = ({ poster, title, year, type, imdbID }) => {

    const navigate = useNavigate()

    const handleClick = (event) => {
        event.preventDefault();
        navigate(`/movie/${imdbID}`)

    }

    return (

        <div className="result">
            <div className="result--wrapper" onClick={handleClick}>
                <figure className="poster__wrapper">
                    <img src={poster} alt="" className="poster" />
                </figure>
                <div className="result__description">
                    <p className="result__title"> {title} </p>
                    <p className="result__year"> {year} </p>
                    <p className="result__type"> Type:{type} </p>
                    <p className="result__imdb"> IMDb ID:{imdbID} </p>
                </div>
            </div>
        </div>

    );
}

export default Movie;


