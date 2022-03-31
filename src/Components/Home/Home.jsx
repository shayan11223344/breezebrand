import React, { Component } from 'react'
import Slider from "./Slider"
import Swiper from './swiper/Swiper'
import Casual from './casual/Casual'
// import Shawls from "./shawls/Shawls"Selling
import Shawls from './shawls/Shawls'
import Selling from "./selling/Selling"
import Ffooter from "./ffooter/Ffooter"
import Image from './image/Image'

import Formal from './formal/Formal'

export default class Home extends Component {
  render() {
    return (
      <div className='bg-white'>
          
          <Slider/>
          <Swiper/>
          <Casual/>
          <Shawls/>
          <Formal/>
          <Selling/>
          <Ffooter/>
          <Image/>
          

      </div>
    )
  }
}
