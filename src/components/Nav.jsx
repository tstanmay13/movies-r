import React from 'react';
import popcorn from "../assets/popcorn.png"
import "./Nav.css"
import "../App.css"

const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <span className="logo__title">FindIt</span>
                <figure className="logo__image--wrapper">
                    <img src={popcorn} alt="" className="logo__image"/>
                </figure>
            </div>
            <ul className="nav__links">
                <li className="nav__link click">
                   <a href="#" className="nav__link--anchor link__hover-effect link__hover-effect--light"> <span className="light">Home</span></a>
                </li>
                <li className="nav__link click">
                    <a href="./movies.html" className="nav__link--anchor link__hover-effect link__hover-effect--white"> Movies </a>
                 </li>
                 <li className="nav__link">
                    <button className="nav__link--anchor contact_btn click">Contact</button>
                 </li>
            </ul>
        </nav>
    );
}

export default Nav;
