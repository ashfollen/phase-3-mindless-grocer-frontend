import React, {useEffect, useState} from 'react';
import GroceriesList from './GroceriesList'

function Groceries({ market, ingredients }) {
  console.log("I MADE IT !!!!!!")
  console.log("IN GROCERIES", market)
  console.log("IN GROCERIES", ingredients)

  return (
    <div className="groceries-by-market">
      <h2>{market.name}</h2>
      {ingredients.map(ingredient => <GroceriesList ingredient={ingredient} />)}
      
    
      {/* <GroceriesList ingredients={ingredients.filter(ingredient => ingredient.recipe.recipe_chosen)}
      /> */}

      
        
    </div>
  );
}

export default Groceries;