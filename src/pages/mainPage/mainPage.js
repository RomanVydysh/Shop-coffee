import React from 'react'
import HeaderNav from '../../components/mainHeader'
import { MainAbout } from '../../components/mainAbout'
import { MainStore } from '../../components/mainStore'
import  MainFooter  from '../../components/mainFooter'

export const MainPage = (props) => {
  return (
    <>
    <HeaderNav clickswapPage={props.clickswapPage}/>
    <MainAbout/>
    <MainStore data={props.data} clickswapPage={props.clickswapPage} />
    <MainFooter clickswapPage={props.clickswapPage}/>
    </>
  )
}
