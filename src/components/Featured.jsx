import React from 'react'
import'./Featured.css'
import { useState , useEffect } from 'react'
import {TfiArrowTopRight,TfiArrowDown} from 'react-icons/tfi'
import axios from 'axios'

const Featured = () => {
  const [data, setData] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
  useEffect(() => {
    axios.get(url).then((res)=>{
      console.log(res.data);
      setData(res.data) 
    }).catch((error)=>{console.log(error);})
  
    
  }, [])
  
  return (
    <div className='featured'>
    <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>
                <div className='right'>
                  {data.map(e=>
                      <div className='card'>
                      <img src={e.image} width={80}></img>
                      <h5>{e.id}</h5>
                      <p>${e.current_price}</p>
                      { e.price_change_percentage_24h>0? 
                        <span style={{color:'green'}}><TfiArrowTopRight/>{e.price_change_percentage_24h}</span>

                      :
                      <span style={{color:'red'}}><TfiArrowDown/>{e.price_change_percentage_24h}</span>

                      }
                      </div>




                    )
                  }
                </div>
                
    </div>
    </div>
  )
}

export default Featured