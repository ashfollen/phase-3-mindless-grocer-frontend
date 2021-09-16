import React, {useEffect, useState} from 'react';

function GroceriesList({ingredient}) {
    console.log("IN GROCERIESLIST", ingredient)
    console.log("!!!!RECIPE INFO", ingredient.recipe.recipe_chosen)
    return (
        
        <li>{ingredient.quantity} x {ingredient.name}</li>
        

    );
}

export default GroceriesList;