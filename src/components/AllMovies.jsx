import React from 'react';
import Movie from './UI/Movie';
import axios from 'axios';
import { MoveUpOutlined } from '@mui/icons-material';

const AllMovies = ({search}) => {
    
  const [movies, setMovies] = React.useState([]);

  async function fetchMovies(){
    const {data} = await axios.get(`http://www.omdbapi.com/?apikey=93f3f842&s=${search}`)
    const finalResult = data.Search
    setMovies(finalResult)
  }

  React.useEffect(() => {
    fetchMovies();
  },[])

    return (
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
    );
}

export default AllMovies;
