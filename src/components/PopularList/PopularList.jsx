import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ShoeCard } from '../ShoeCard';
import './style.scss';
import { GET_SHOES } from '../../graphql/queries/get_shoes';

const PopularList = () => {
    const { loading, error, data } = useQuery(GET_SHOES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const shoes = data.getShoes.collection;

    return (
        <section className="sellers sellers-container container">
            <h2 className="sellers_title">Top sales</h2>
            <div className="sellers_list">
                {shoes.slice(0, 3).map(shoe => (
                    <ShoeCard
                        key={shoe.id}
                        id={shoe.id}
                        brand={shoe.brandName}
                        description={shoe.description}
                        name={shoe.model}
                        desc={shoe.description}
                        price={shoe.price}
                        size={shoe.size}
                        color={shoe.color}
                        image={shoe.image}
                    />
                ))}
            </div>
            <Link to="/shoe" className="sellers_btn">
                Show more
            </Link>
        </section>
    );
};

export { PopularList };
