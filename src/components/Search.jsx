import React from 'react';
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <section id="search">
            <div className="browse">
                <h1 className="browse__title" >Browse movies...</h1>
                <div className="input">
                    <input className="input__box2" type="text" placeholder="Search by title" />
                    <SearchIcon className="icon" />
                </div>
            </div>
        </section>
    );
}

export default Search;
