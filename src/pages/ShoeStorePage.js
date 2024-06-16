// src/components/ShoeStorePage.js

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHOES } from '../graphql/queries/get_shoes';

function ShoeStorePage() {
  const { loading, error, data } = useQuery(GET_SHOES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const shoes = data.getShoes.collection;

  return (
    <div>
      <h1>Shoe Store</h1>
      <div>
        {shoes.map(shoe => (
          <div key={shoe.id}>
            <h2>{shoe.brandName} - {shoe.model}</h2>
            <p>Price: ${shoe.price}</p>
            <p>Color: {shoe.color}</p>
            <p>Size: {shoe.size}</p>
            <p>{shoe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoeStorePage;
