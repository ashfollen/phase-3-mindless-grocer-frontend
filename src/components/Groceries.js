import React, {useEffect, useState} from 'react';
import GroceriesList from './GroceriesList'

function Groceries({ market, ingredients }) {

  return (
    <div className="groceries-by-market">
      <h2>{market.name}</h2>
      {ingredients.map(ingredient => <GroceriesList key={ingredient.id} ingredient={ingredient} />)}
              
    </div>
  );
}

export default Groceries;