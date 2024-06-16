import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const ShoeCard = ({ image, brand, name, description, price, id, color, size }) => {
    return (
        <Link to={`/shoe/${id}`} className="card">
            <div className="card-poster">
                <img
                    width={323}
                    height={323}
                    src={image}
                    alt={`${brand} ${name}`}
                />
            </div>
            <div className="card-info">
                <h2 className="card-title">
                    {brand} {name}
                </h2>
                <span className="card-info__el">Price: {price}$</span>
                <span className="card-info__el">Color: {color}</span>
                <span className="card-info__el">Size: {size}</span>
                <p className="card-desc">
                    <span className="card-info__el">Description: {description}</span>
                </p>
                <Link to={`/shoe/${id}`} className="card-more-link">
                    Show more
                </Link>
            </div>
        </Link>
    );
};

export { ShoeCard };
