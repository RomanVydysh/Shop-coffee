import React from 'react'
import groupImg from "../svg/Group2.svg"
import lineImg from "../svg/Line (1).svg"
import coffeImg from "../svg/Group (1).svg"
import "../styles/mainFooter.css"
const  MainFooter = (props) => {
  return (
    <footer>
        <div class="footer">
            <div class="footer-nav">
            <ul class="footer-nav-ul">
                <li>
                    <div class="footer-nav-logo">
                        <img src={groupImg} alt="1" />
                        <a onClick={props.clickswapPage}>Coffee house</a>
                    </div>
                </li>
                <li><a onClick={props.clickswapPage}>Our coffee</a></li>
                <li><a onClick={props.clickswapPage}>For your pleasure</a></li>
            </ul>
        </div>
            <div class="group-main">
                <img src={lineImg} alt="line" />
                <img src={coffeImg} alt="line" />
                <img src={lineImg} alt="line" />
            </div>
        </div>
    </footer>
  )
}

export default MainFooter