import React from 'react';
import TopBar from '../components/TopBar';
import AllMovies from '../components/AllMovies';
import "../components/Search.css"
import "../components/TopBar.css"

import { useLocation, useParams } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import Years from '../components/UI/Years';
import Movie from '../components/UI/Movie';

import axios from 'axios';



const Movies = () => {
    const { search } = useParams();

    const [movies, setMovies] = React.useState([]);
    const [searchId, setSearchId] = React.useState(search);
    const [reload, setReload]  = React.useState(false);


    async function fetchMovies(id) {
        // setReload(false)
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=93f3f842&s=${id || search}`)
        const finalResult = data.Search
        setMovies(finalResult)
    }

    React.useEffect(() => {
        fetchMovies();
    }, [])


    React.useEffect(() => {
        fetchMovies(searchId)
    }, [reload])

    const onSearch = (event) =>{
        event.preventDefault();
        // fetchMovies(searchId)
        setReload(true)
    }

    // console.log(searchId)

    return (
        <div>
            <section id="search">
                <div className="browse">
                    <h1 className="browse__title" >Browse movies...</h1>
                    <form className="input" onSubmit={onSearch}>
                        <input
                            className="input__box2"
                            type="text"
                            placeholder="Search by title"
                            value={searchId}
                            onChange={(event) => setSearchId(event.target.value)}
                        />
                        <SearchIcon className="icon" />
                    </form>
                </div>
            </section>

            <div className="container">
                <div className="rowBar">
                    <div className="search__bar">
                        <h3 className="search__tag">Search results for: <span className="light">{searchId}</span></h3>
                        <div className="years__container">
                            <div className="slider__wrapper">
                                <h3 className="search__years">Years</h3>
                                <Years className="slider" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="results">
                <div className="row">
                    <div className="results__container">
                        {
                            movies.map((movie, index) => (
                                <Movie
                                    key={index}
                                    poster={movie.Poster}
                                    title={movie.Title}
                                    year={movie.Year}
                                    type={movie.Type}
                                    imdbID={movie.imdbID}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Movies;
