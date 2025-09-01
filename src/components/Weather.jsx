import React from 'react'
import './Weather.css'
import searchIcon from '../assets/search.png'

const weather = () => {
  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={searchIcon} alt="" srcset="" />
            </div> 
    </div>
  )
}

export default weather