import React from 'react';
import "./Movie.css"
import axios from 'axios';
import { useNavigate } from 'react-router';



const Movie = ({poster, title, year, type, imdbID}) => {

        // const {data} = await axios.get(`https://www.omdbapi.com/?apikey=93f3f842&i=${imdbID}&plot=full`)
        // console.log(data)

    const navigate = useNavigate()

    const handleClick = (event) => {
        event.preventDefault();
        navigate(`/${imdbID}`)

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
                    <p className="result__type"> {type} </p>
                    <p className="result__imdb"> {imdbID} </p>
                </div>
            </div>
        </div>

    );
}

export default Movie;
