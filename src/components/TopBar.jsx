import React from 'react';
import Years from './UI/Years';
import "./TopBar.css"

const Topbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="search__bar">
                    <h3 className="search__tag">Search results for</h3>
                    <div className="years__container">
                        <div className="slider__wrapper">
                            <h3 className="search__years">Years</h3>
                            <Years className="slider" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
