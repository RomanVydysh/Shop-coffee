import React from 'react'
import MaskImg from '../img/Mask Group.png'
import line from "../svg/Line (1).svg"
import group from "../svg/Group (1).svg"
import linePng from "../img/Line.png"
import "../styles/aSideCatalog.css"
export const ASideCatalog = () => {
  return (
    <aside class="main--coffe">
        <div class="main--about--aside">
            <img class="main--img" src={MaskImg} alt="img" />
            <section class="main--text--mass">
                    <h1 class="main--text">About our beans</h1>
                <div class="group-main">
                    <img src={line} alt="line" />
                    <img src={group} alt="line" />
                    <img src={line} alt="line" />
                </div>
                
                <p class="main--about-catalog">Extremity sweetness difficult behaviour he of.On <br/> disposal of as landlord horrible.<br/><br/>

                    Afraid at highly months do things on at. Situation <br/> recommend objection do intention <br/>
                    so questions. 
                    As greatly removed calling pleased improve an. <br/> Last ask him cold feel
                    met spot shy want. Children me laughing we <br/> prospect answered followed. At it went <br/> 
                    is song that held help face.</p>
            </section>
        </div>
        <img src={linePng} alt="Line" class="main--line--img" />
    </aside>
  )
}
