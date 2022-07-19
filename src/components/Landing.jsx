import React from 'react';
import "./Landing.css"
import "../App.css"
import landing_image from "../assets/undraw_horror_movie_3988.svg"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router';



//         `https://www.omdbapi.com/?apikey=93f3f842&s=${search_key}&y=${i}`

const apiLink = "http://www.omdbapi.com/?apikey=93f3f842&";

const Landing = () => {
    const [search, setSearch] = React.useState([])
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`${search}`)

    }

    return (
        <header id="landing">
            <div className="landing">
                <div className="header__container">
                    <h1>America's fastest movie searching platform</h1>
                    <h2><span className="light">Find any movie you want with</span> FindIt</h2>

                    <form className="input" onSubmit={handleSubmit}>
                        <input
                            id="input__box"
                            type="text"
                            placeholder="Search by title"
                            value = {search}
                            onChange={(event) => setSearch(event.target.value)} />
                        <Button
                            type="submit"
                            className="search" >
                            <SearchIcon className="secondary" />
                        </Button>
                    </form>
                    <figure className="header__image--wrapper">
                        <img src={landing_image} alt="" className="header__image" />
                    </figure>
                </div>
            </div>
        </header>
    );
}

export default Landing;
