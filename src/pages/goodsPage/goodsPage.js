import React from 'react'
import { OurHead } from '../../components/OurHead'
import { MainForPleasure } from '../../components/MainForPleasure'
import { Cataloge } from '../../components/cataloge'
import MainFooter from "../../components/mainFooter"


export const GoodsPage = (props) => {
  return (
    <>
        <OurHead  clickswapPage={props.clickswapPage}/>
        <MainForPleasure data={props.data}/>
        <Cataloge data={props.data} clickswapPage={props.clickswapPage}/>
        <MainFooter clickswapPage={props.clickswapPage}/>
    </>
  )
}
