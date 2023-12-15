import React from 'react'
import lineImg from "../svg/Line (1).svg"
import coffeImg from "../svg/Group (1).svg"
import line from "../img/Line.png"
import "../styles/mainForPleasure.css"
import img from "../img/coffee-839233_1920.png"
export const MainForPleasure = () => {
  return (
    <aside class="main--coffe--For">
        <div class="main--about--aside--For">
            <img class="main--img--For" src={img} alt="img" />
            <section class="main--text--mass--For">
                <h1 class="main--text--For">About our goods</h1>
                <div class="group-main--For">
                    <img src={lineImg} alt="line" />
                    <img src={coffeImg} alt="line" />
                    <img src={lineImg} alt="line" />
                </div>
        
                <p class="main--about--For">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                    <br />
                    Afraid at highly months do things on at. Situation recommend objection do intention <br />
                    so questions. <br />
                    As greatly removed calling pleased improve an. Last ask him cold feel<br />
                    met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                    is song that held help face.
                </p>
            </section>
        </div>
        <img src={line} alt="Line" class="main--line--img--For" />
    </aside>
  )
}
