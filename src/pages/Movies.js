import React from 'react';
import Search from '../components/Search';
import TopBar from '../components/TopBar';
import AllMovies from '../components/AllMovies';
import { useLocation, useParams} from 'react-router';

const Movies = () => {
    const {search} = useParams();
    return (
        <div>
            <Search />
            <TopBar search={search}/>
            <AllMovies search={search}/>
        </div>
    );
}

export default Movies;
