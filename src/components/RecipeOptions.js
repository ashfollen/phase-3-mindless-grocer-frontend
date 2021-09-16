import React, {useEffect, useState} from 'react';


function RecipeOptions({recipe, updateRecipeList}) {
    const [recipeChecked, setRecipeChecked] = useState(false);

    function handleOnChange(e) {
        setRecipeChecked(!recipeChecked);
        fetch(`http://localhost:9292/recipes/${e.target.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipe_chosen: true,
            }),
        })
            .then((resp) => resp.json())
            .then(updatedCheckedRecipe => updateRecipeList(updatedCheckedRecipe))
    };

    return (
        <div>                
                <input
                    type="checkbox"
                    id={recipe.id}
                    value={recipe.name}
                    checked={recipeChecked}
                    onChange={(e) => handleOnChange(e)}
                />
                <h2>{recipe.name}</h2>
        </div>
    )
}

export default RecipeOptions;