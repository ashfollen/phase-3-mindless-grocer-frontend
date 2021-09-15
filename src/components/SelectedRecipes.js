import React, {useEffect, useState} from 'react';
import ChosenRecipe from './ChosenRecipe'

function SelectedRecipes({ recipes }) {
    return (
        <div>
            {recipes.map(recipe => <ChosenRecipe key={recipe.id} recipe={recipe} />)}

        </div>
    )

}

export default SelectedRecipes;