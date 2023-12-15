import React from 'react'
import line from "../svg/Line (1).svg"
import group from "../svg/Group (1).svg"
import img1 from '../img/81tGmkXdGLL.jpg'
import "../styles/item.css"

export const Item = (props) => {
  return (
    <aside class="main--coffe">
    <div class="main--about--aside">
    <img class="main--img--item" src={img1} alt="img" />
    <section class="main--text--mass">
        <h1 class="main--text">About it</h1>
    <div class="group-main">
        <img src={line} alt="line" />
        <img src={group} alt="line" />
        <img src={line} alt="line" />
    </div>
    
    <p class="main--country">
        <b>Country:</b> Brasil
    </p>
        <h1 class="main--about"><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
        <h2 class="main-price"><b>Price:  <b1 class="main-price-bold">16.99$</b1></b></h2>
    </section>
    </div>
</aside>
  )
}
