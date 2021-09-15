import React, {useEffect, useState} from 'react';
import GroceriesCard from './GroceryCard';

function GroceriesContainer({ markets, ingredients }) {
    return (
        <div id="market-container">
            {markets.map(market => {
                return (
                    <GroceriesCard 
                        key={market.id}
                        market={market}
                        ingredients={ingredients}
                    />
                );
            })}
        </div>   
    );
}

export default GroceriesContainer;
