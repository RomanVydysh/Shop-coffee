import React from 'react'
import "../styles/catalogItem.css"



export const CatalogItem = ({img,name,country,price, clickswapPage}) => {
  return (
    <div alt="coffe"  className="card d-flex" onClick={clickswapPage} >
        <img src={img} alt="coffe" />
        <h1 alt="coffe" >{name}</h1>
        <h2 alt="coffe" >{country}</h2>
        <h3 alt="coffe" >{price}</h3>
    </div>
  )
}
