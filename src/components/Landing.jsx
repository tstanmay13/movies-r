import React from 'react';
import "./Landing.css"
import "../App.css"
import landing_image from "../assets/undraw_horror_movie_3988.svg"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";

const Landing = () => {
   
    
    return (
        <header id="landing">
            <div className="landing">
                <div className="header__container">
                    <h1>America's fastest movie searching platform</h1>
                    <h2><span className="light">Find any movie you want with</span> FindIt</h2>

                    <form className="input">
                        <input id="input__box" type="text" placeholder="Search by title" />
                        <Button type="submit" className="search"> <SearchIcon className="secondary"/> </Button>
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
