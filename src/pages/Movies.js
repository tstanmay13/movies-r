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


const MAX_REQUESTS = 9;

const Movies = () => {
    const { search } = useParams();

    const [movies, setMovies] = React.useState([]);
    const [searchId, setSearchId] = React.useState(search);
    const [loading, setLoading] = React.useState();

    async function fetchMovies(id) {
        setLoading(true)
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=93f3f842&s=${id || search}`)
        const finalResult = data.Search
        setMovies(finalResult)
        setLoading(false)
    }

    React.useEffect(() => {
        fetchMovies();
    }, [])

    const onSearch = (event) =>{
        event.preventDefault();
        fetchMovies(searchId)
        window.history.replaceState(null, "New Page Title", `${searchId}`)
    }


    async function fetchMoviesNoSave(id){
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=93f3f842&s=${id || search}`)
        return data

    }

     const changeYears = async (value) => {
        setLoading(true)
        //  console.log(String(value[0]).slice(0,3))
        const data = await fetchMoviesNoSave(searchId);
        const filterData = Object.values(data.Search).filter(item => (
            +String(item.Year).slice(0,4) > value[0] && 
            +String(item.Year).slice(0,4) < value[1] ))
        setLoading(false)
        setMovies(filterData)

        

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
                                <Years searchId={searchId} changeSlider={changeYears} className="slider" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="results">
                <div className="row">
                    <div className="results__container">
                        {   
                            loading ? new Array(9).fill(0).map((element,index) => (
                                <div className="result">
                                <div className="result--wrapper">
                                    <figure className="poster__wrapper">
                                        <img src="" alt="" className="poster--skeleton" />
                                    </figure>
                                    <div className="result__description">
                                        <p className="result__title-s"> </p>
                                        <p className="result__year-s">  </p>
                                        <p className="result__type-s">  </p>
                                        <p className="result__imdb-s">  </p>
                                    </div>
                                </div>
                            </div>
                            )) :
                            (movies ? movies?.slice(0,9).map((movie, index) => (
                                <Movie
                                    key={index}
                                    poster={movie.Poster}
                                    title={movie.Title}
                                    year={movie.Year}
                                    type={movie.Type}
                                    imdbID={movie.imdbID}
                                />
                            )) : <div className="DNE"> Movie Doesn't Exist </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Movies;
