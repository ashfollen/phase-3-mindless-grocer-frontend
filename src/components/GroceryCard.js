import React, {useEffect, useState} from 'react';

function GroceriesCard({ market, ingredients }) {
  return (
    <div className="market-card">
        <div className="market-list">
         <h2>{market.name}</h2>
            {ingredients.map(ingredient =>
                `${ingredient.name}, `)}
        </div>
    </div>
  );
}



export default GroceriesCard;