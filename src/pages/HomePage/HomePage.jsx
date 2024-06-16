import React from 'react';
import {Hero, PopularList, ShoeCard} from "../../components";

const HomePage = () => {
    return (
        <div className="hero hero-container">
            <Hero/>
            <PopularList/>
        </div>
    );
};

export {HomePage};