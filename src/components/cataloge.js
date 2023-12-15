import React from 'react'
import { CatalogItem } from './catalogItem'
import "../styles/cataloge.css"
export const Cataloge = ({data , clickswapPage, onFilterSelect, onUpdateSearch}) => {
    const buttons = ["Brazil","Kenya","Columbia", "All"]
    const element = data.map(item => {
        return <CatalogItem {...item} clickswapPage={clickswapPage} key={data.id} id={data.id}/>
    })
    return (
    <section class="cataloge--store">
    <nav class="cataloge--nav--store">
        <div class="cataloge--nav--search--store">
            <h1>Lookiing for</h1>
            <input onChange={(e) => onUpdateSearch(e)} type="text" placeholder="start typing here..." class="cataloge--nav--input--store" />
        </div>
        <div class="cataloge--nav--filter--store">
            <h1>Or filter</h1>
            {buttons.map(item => {
                return  <button onClick={() => onFilterSelect(item)}><a>{item}</a></button>
            })}
        </div>
    </nav>
    <div class="cataloge--card--store">
        <div className="cataloge--card--row--store " alt="coffe"> 
                {element}
        </div>
    </div>
    </section>
  )
}
