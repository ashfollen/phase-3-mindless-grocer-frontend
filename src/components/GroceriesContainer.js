import React, {useEffect, useState} from 'react';
import GroceriesCard from './GroceryCard';

function GroceriesContainer({ market, ingredients }) {
    return (
        // console.log(market)
            <div id="market-list">
                <li>
                Market: {market.name}
                {/* {market.map(market => (
                    <GroceriesCard 
                        key={market.id}
                        market={market}
                     />))} */}
                </li>
            </div>   
    );
}

export default GroceriesContainer;