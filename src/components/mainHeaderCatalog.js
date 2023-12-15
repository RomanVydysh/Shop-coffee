import React from 'react'
import logoImg from "../svg/Group.svg"
import "../styles/mainHeaderCatalog.css"
export const MainHeaderCatalog = (props) => {
  return (
    
        <header class="head--Catalog">
        <nav class="head--nav--Catalog">
            <ul class="head--list--Catalog">
                <div class="logo-text--Catalog"><img src={logoImg} alt="coffe" />
                    <li><a onClick={props.clickswapPage}>Coffee house</a></li>
                </div>
                <li><a onClick={props.clickswapPage}>Our coffee</a></li>
                <li><a onClick={props.clickswapPage}>For your pleasure</a></li>
            </ul>
        </nav>
        <h1 class="head--text--Catalog">Our Coffee</h1>
    </header>
   
  )
}
