// import React, {useEffect, useState} from 'react';
import RecipeOptions from './RecipeOptions';
import SelectedRecipes from './SelectedRecipes';

function RecipesContainer({recipes, updateRecipeList}) {
    
    return (
        <div className="recipe-container">
            <div className="recipe-options">            
            <h1>Recipe Options</h1>
                {recipes.map(recipe => <RecipeOptions key={recipe.id} recipe={recipe} updateRecipeList={updateRecipeList} />)}
            </div>
            <div className="selected-recipes">
            <h1>Selected Recipes</h1>
                 <SelectedRecipes recipes={recipes.filter(recipe => recipe.recipe_chosen)} />
            </div>
        </div>
    )
}

export default RecipesContainer;