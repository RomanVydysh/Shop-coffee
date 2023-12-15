import React from 'react'
import { MainStoreItem } from './mainStoreItem'
import "../styles/mainStore.css"



export const MainStore = (props) => {
    const item = props.data.map((item,i) => {
        if(i >= 3) {
            return null
        }
        return (
            <MainStoreItem {...item} clickswapPage={props.clickswapPage}/>  
        ) 
    })
    return (
        <section class="store">
            <h1 class="store-text">Our best</h1>
            <div class="cataloge">
                 {item}
            </div>
        </section>
    )
}
