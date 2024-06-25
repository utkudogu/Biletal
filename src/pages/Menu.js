import React from 'react'
import { MenuList } from "../helpers/MenuList"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Size Özel Hazırlanmış Rotalar</h1>
        <div className='menuList'>
         {MenuList.map((menuItem,key)=>{
          return <div className='menuItem'>
            <div><img src={menuItem.image}/></div>
            <h3>{menuItem.name}</h3>
            
          </div>
         })}   
        </div>
    </div>
  )
}

export default Menu