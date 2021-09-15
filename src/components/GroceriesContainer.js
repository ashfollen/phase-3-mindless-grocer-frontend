import React, {useEffect, useState} from 'react';
import GroceriesCard from './GroceryCard';

function GroceriesContainer({ markets, ingredients, setIngredients }) {
    return (
        <div className="market-container">
            {markets.map(market => {
                return (
                    <GroceriesCard 
                        key={market.id}
                        market={market}
                        ingredients={ingredients}
                        setIngredients={setIngredients}
                    />
                );
            })}
        </div>   
    );
}

export default GroceriesContainer;
