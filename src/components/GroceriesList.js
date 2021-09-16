// import React, {useEffect, useState} from 'react';

function GroceriesList({ ingredient }) {
    return (
        <li>{ingredient.quantity} x {ingredient.name}</li>
    );
}

export default GroceriesList;