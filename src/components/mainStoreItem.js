import React from 'react'
import "../styles/storeCard.css"
export const MainStoreItem = ({img,name,price,clickswapPage}) => {
  return (
    <div alt="coffe" class="store-card" onClick={clickswapPage}>
            <a>
                <img class="store-card-img" src={img}/>
                <h1 class="store-card-text" alt="coffe">{name}</h1>
                <h2 class="store-card-price" alt="coffe">{price}</h2>
            </a>
    </div> 
  )
}
