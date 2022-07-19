import React from 'react';
import "./IndividualMovie.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import axios from 'axios';

const IndividualMovie = ({ id }) => {
    const [movie, setMovie] = React.useState([]);

    async function fetchMovie() {
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=93f3f842&i=${id}&plot=full`)
        setMovie(data)
    }

    React.useEffect(() => {
        fetchMovie();
      },[])

    return (
        <div className="movieDescription">
            <div className="icon__wrapper"><Link to="/movies"> <ArrowBackIcon className="back__icon" /> </Link></div>

            <div className="movie__wrapper">
                <figure className="image__wrapper">
                    <img className="image" src={movie.Poster} alt="" />
                </figure>
                <div className="description">
                    <h1 className="title"> {movie.Title}</h1>
                    <h2 className="rating" >Rating: {movie.imdbRating}</h2>
                    <p className="plot"> {movie.Plot}
                    </p>
                    <h3 className="language">Language: {movie.Language}</h3>

                    <h3 className="awards">Awards: {movie.Awards}</h3>
                </div>
            </div>
        </div>
    );
}

export default IndividualMovie;
