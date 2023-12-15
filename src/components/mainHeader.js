import React from 'react'
import "../styles/mainHeader.css"
import logoImg from "../svg/Group.svg"
import lineImg from "../svg/Line.svg"
import coffeImg from "../svg/coffee-beans (1).svg"


const MainHeader = (props) => {
  return ( 
    <header className="head">
        <nav className="head--nav">
            <ul className="head--list">
                <div className="logo-text">
                    <img src={logoImg} alt="coffe" />
                    <li><a onClick={props.clickswapPage}>Coffee house</a></li>
                </div>
                <li><a onClick={props.clickswapPage}>Our coffee</a></li>
                <li><a onClick={props.clickswapPage}>For your pleasure</a></li>
            </ul>
        </nav>
        <div className="intro">
            <h1>
                Everything You Love About Coffee
            </h1>
            <div className="coffe-rows">
                <img src={lineImg} alt="" />
                <img src={coffeImg} alt="coffe-beans" />
                <img src={lineImg} alt="" />
            </div>
            <div className="intro-text-full">
                <h2 className="intro-text1">We makes every day full of energy and taste</h2>
                <h3 className="intro-text2">Want to try our beans?</h3>
            </div>
            <a className="intro-button">More</a>
        </div>
    </header>
  )
}

export default MainHeader