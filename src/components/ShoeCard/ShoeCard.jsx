import React from 'react';
import './style.scss'
import {Link} from "react-router-dom";



const ShoeCard = ({img, brand, name, desc, price, id,color, size}) => {
    return (
        <Link to="shoe" className="card">
            <div className="card-poster">
                <img width={323} height={323} src={img}
                     alt={name}/>
            </div>
            <div className="card-info">
                <h2 className="card-title">{brand} {name}</h2>

                <span className="card-info__el">Price: {price}$</span>
                <span className="card-info__el">Color: {color}</span>
                <span className="card-info__el"> Size: {size}</span>
                <p className="card-desc"><span className="card-info__el">  Description:{desc}</span> </p>
                <Link to={`shoe/${id}`}>Show more</Link>
            </div>
        </Link>
    );
};

export {ShoeCard};