import React from 'react';
import Search from '../components/Search';
import TopBar from '../components/TopBar';
import AllMovies from '../components/AllMovies';

const Movies = () => {
    return (
        <div>
            <Search />
            <TopBar />
            
            <AllMovies />
        </div>
    );
}

export default Movies;
