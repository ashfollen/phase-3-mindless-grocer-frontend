import React, {useEffect, useState} from 'react';

function GroceriesCard({ market, ingredients, setIngredients }) {


  return (
    <div className="market-card">
        <div className="market-list">
         <h2>{market.name}</h2>
            <br></br>
            {ingredients.map(ingredient =>
                <li>
                    {ingredient.market_id} 
                    {ingredient.name}
                </li>
                // `${ingredient.name}, `
            )}
            <br></br>
        </div>
    </div>
  );
}

export default GroceriesCard;