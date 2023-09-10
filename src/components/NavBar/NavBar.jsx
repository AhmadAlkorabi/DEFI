import React from 'react'
import './NavBar.css'
import{FaBars , FaTimes } from 'react-icons/fa'
import { useState } from 'react'
const NavBar = () => {
    const [click, setClick] = useState(false)
    const handlClick=()=>{
        setClick(!click)
        
    }
  return (
    <div className='header'>
        <div className='container'>
            <h1>De<span className='primary'>Fi</span></h1>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li> <a href='/'>HOME</a></li>
                <li> <a href='/'>featured</a></li>
                <li> <a href='/'>earn</a></li>
                <li> <a href='/'>contact</a></li>
            </ul>
            <div className='btn-gruop'>
                <button className='btn'>Connect Wallet</button>
            </div>
            <div className='hamburger' onClick={handlClick}>
                {click? (<FaTimes  size={20}  style={{color:'#333'}}/>):(<FaBars  size={20}  style={{color:'#333'}}/>) }
            </div>
        </div>
    </div>
  )
}

export default NavBar