import React from 'react';
import popcorn from "../assets/popcorn.png"
import "./Nav.css"
import "../App.css"

const Nav = () => {
    return (
        <nav>
            <div class="logo">
                <span class="logo__title">FindIt</span>
                <figure class="logo__image--wrapper">
                    <img src={popcorn} alt="" class="logo__image"/>
                </figure>
            </div>
            <ul class="nav__links">
                <li class="nav__link click">
                   <a href="#" class="nav__link--anchor link__hover-effect link__hover-effect--light"> <span class="light">Home</span></a>
                </li>
                <li class="nav__link click">
                    <a href="./movies.html" class="nav__link--anchor link__hover-effect link__hover-effect--white"> Movies </a>
                 </li>
                 <li class="nav__link">
                    <button class="nav__link--anchor contact_btn click">Contact</button>
                 </li>
            </ul>
        </nav>
    );
}

export default Nav;
