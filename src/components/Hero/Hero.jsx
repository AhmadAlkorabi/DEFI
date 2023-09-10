import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
    <div className='container'>
        <div className='left'>
       <div className='text'>
       <p>Buy & sell crypto 24/7 using your retirement account</p>
       <h1>Invest in Cryptocurreny with your IRA</h1>
       <p>Buy,Sell,and store hundreds of cryptocurrencies</p></div>
       <div className=' '>
        <input type='email' placeholder='Enter your Email'/>
        <button className='btn'>Learn More</button>
       </div>
        </div>
        <div className='right'>
            <img src='Vector MacBook.png' width={500}></img>
        </div>
    </div>
    </div>
  )
}

export default Hero