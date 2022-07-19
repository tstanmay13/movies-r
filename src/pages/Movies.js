import React from 'react';
import Search from '../components/Search';
import TopBar from '../components/TopBar';
import AllMovies from '../components/AllMovies';
import { useLocation } from 'react-router';

const Movies = () => {
    const location = useLocation()

    

    return (
        <div>
            <Search />
            <TopBar />
            Goog gog ahgha
            <div> {location.data}</div>
            <AllMovies />
        </div>
    );
}

export default Movies;
