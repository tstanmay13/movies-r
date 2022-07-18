import React from 'react';
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <section id="search">
            <div class="browse">
                <h1>Browse movies...</h1>
                <div class="input">
                    <input class="input__box2" type="text" placeholder="Search by title" onkeydown="searchAgain(event)" />
                    <SearchIcon />
                </div>
            </div>
        </section>
    );
}

export default Search;
