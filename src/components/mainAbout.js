import React from 'react'
import lineImg from "../svg/Line (1).svg"
import groupImg from "../svg/Group (1).svg"
import "../styles/mainAbout.css"


export const MainAbout = () => {
  return (
    <div class="main">
    <h1 class="main-text">About Us</h1>
    <div class="group-main">
        <img src={lineImg} alt="line" />
        <img src={groupImg} alt="line" />
        <img src={lineImg} alt="line" />
    </div>
    <p class="main-lorem">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.</p>
    <p class="main-lorem">Now residence dashwoods she excellent you. Shade being under his bed her, Much
        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
        horrible but confined day end marriage. Eagerness furniture set preserved far
        recommend. Did even but nor are most gave hope. Secure active living depend son
        repair day ladies now.</p>
    </div>
  )
}
