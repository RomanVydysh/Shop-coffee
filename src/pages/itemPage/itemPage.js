import React from 'react'
import { MainHeaderCatalog } from '../../components/mainHeaderCatalog'
import { Item } from '../../components/item'
import MainFooter from '../../components/mainFooter'

export const ItemPage = (props) => {
  return (
    <>
        <MainHeaderCatalog clickswapPage={props.clickswapPage} />
        <Item img={props.img} />
        <MainFooter clickswapPage={props.clickswapPage}/>
    </>
  )
}
