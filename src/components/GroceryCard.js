import React, {useEffect, useState} from 'react';

function GroceriesCard({ market, ingredient }) {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={market.id}
      >
        <div className="content">
          <div className="header">
            {market.name}
          </div>
        </div>
        </div>
      </div>
  );
}



export default GroceriesCard;