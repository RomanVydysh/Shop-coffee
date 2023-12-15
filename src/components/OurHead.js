import React from 'react'
import "../styles/OurHead.css"
import img1 from "../svg/Group.svg"

export const OurHead = (props) => {
  return (
    <header class="head--pleasure">
        <nav class="head--nav--pleasure">
            <ul class="head--list--pleasure">
                <div class="logo-text--pleasure"><img src={img1} alt="coffe" />
                    <li><a href="#" onClick={props.clickswapPage}>Coffee house</a></li>
                </div>
                <li><a href="#" onClick={props.clickswapPage}>Our coffee</a></li>
                <li><a href="#" onClick={props.clickswapPage}>For your pleasure</a></li>
            </ul>
        </nav>
        <h1 class="head--text--pleasure">For your pleasure</h1>
    </header>
  )
}
