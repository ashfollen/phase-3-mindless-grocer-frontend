import React, {useEffect, useState} from 'react';
import GroceriesCard from './GroceryCard';

function GroceriesContainer({ markets, ingredients }) {
    return (
        <h1>Testing Groceries Container
            <div id="grocery-card">
                {markets.map(market => console.log(market))}
                {markets.map(market => (
                    <GroceriesCard 
                        key={market.id}
                        market={market}
                     />))}
            </div>
        </h1>     
    );
}

export default GroceriesContainer;