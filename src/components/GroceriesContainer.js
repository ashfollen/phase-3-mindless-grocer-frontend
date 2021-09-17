// import React, {useEffect, useState} from 'react';
import Groceries from './Groceries';

function GroceriesContainer({ markets, ingredients }) {
    return (
        <div className="market-container">
            {markets.map((market) => 
                <Groceries
                    key={market.id} 
                    market={market} 
                    ingredients={ingredients.filter(ingredient => ingredient.market_id === market.id)} 
                />
            )}    
        </div>   
    );
}

export default GroceriesContainer;
