import React from 'react';
import {Hero, PopularList} from "../../components";

const HomePage = () => {
    return (
        <div className="home home-container ">
            <Hero/>
            <PopularList/>
        </div>
    );
};

export {HomePage};