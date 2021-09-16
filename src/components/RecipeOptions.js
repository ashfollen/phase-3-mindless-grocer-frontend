import React, {useEffect, useState} from 'react';


function RecipeOptions({recipe, updateRecipeList, onDeleteRecipe}) {
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

    function handleDelete(id) {
        
        fetch(`http://localhost:9292/recipes/${id}`, {
            method: "DELETE",
        })
        onDeleteRecipe(id)
    }

    return (
        <div className="recipe-option-items">                
                <input
                    type="checkbox"
                    id={recipe.id}
                    value={recipe.name}
                    checked={recipeChecked}
                    onChange={(e) => handleOnChange(e)}
                />
                <h2>{recipe.name}</h2>
                <button id={recipe.id} onClick={(e) => handleDelete(e.target.id)}>&nbsp;&nbsp; 🗑 &nbsp;&nbsp;</button>
        </div>
    )
}

export default RecipeOptions;