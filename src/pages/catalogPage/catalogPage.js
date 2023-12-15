import React from 'react'
import { MainHeaderCatalog } from '../../components/mainHeaderCatalog'
import { ASideCatalog } from '../../components/aSideCatalog'
import { Cataloge } from '../../components/cataloge'
import MainFooter from '../../components/mainFooter'

export const CatalogPage = (props) => {
  return (
    <>
        <MainHeaderCatalog clickswapPage={props.clickswapPage} />
        <ASideCatalog/>
        <Cataloge onUpdateSearch={props.onUpdateSearch} onFilterSelect={props.onFilterSelect} data={props.data} clickswapPage={props.clickswapPage} /> 
        <MainFooter clickswapPage={props.clickswapPage}/>
    </>
  )
}
