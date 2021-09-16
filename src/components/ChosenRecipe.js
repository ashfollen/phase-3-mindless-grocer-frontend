import React, {useEffect, useState} from 'react';

function ChosenRecipe({ recipe }) {
    return (
        <div>
            <li>{recipe.name}</li>
        </div>
    )
}

export default ChosenRecipe;