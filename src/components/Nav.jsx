import React from 'react';
import popcorn from "../assets/popcorn.png"
import "./Nav.css"
import "../App.css"
import { Link } from 'react-router-dom';

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
                   <Link to="/" className="nav__link--anchor link__hover-effect link__hover-effect--light"> <span className="light">Home</span></Link>
                </li>
                <li className="nav__link click">
                    <Link to="/movies" className="nav__link--anchor link__hover-effect link__hover-effect--white"> Movies </Link>
                 </li>
                 <li className="nav__link">
                    <button className="nav__link--anchor contact_btn click">Contact</button>
                 </li>
            </ul>
        </nav>
    );
}

export default Nav;
