import React, { Component } from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
// import { Col } from 'react-bootstrap'
import "swiper/css"
import {Autoplay} from "swiper"
import data from '../../../Datafile'



export default class swiper extends Component {
    state={
        data:data
    }
  render() {
    console.log(this.state.data.home.head.heading,'test')

    return (

      <div className="  d-flex justify-content-center  ">
     
     
      <div className='col-11 d-flex flex-lg-row flex-md-column  flex-column align-items-center  pt-5'>
      
      <div className=" d-flex flex-column align-items-center p-lg-5 p-md-1 p-1 col-lg-3 col-md-10 col-10">
        <h2 className=''>
        {this.state.data.home.head.heading}
        </h2>
       <p className='text-center  d-lg-block d-md-none d-none' style={{fontSize:"12.5px",lineHeight:"22px"}}>
        {this.state.data.home.head.text}
        </p>
        <button className='btn bg-none col-7 d-lg-block d-md-none d-none'>

        {this.state.data.home.head.btn}
        </button>

        </div>
        
        
    
    
      <div className='d-flex justify-content-center col-lg-9 col-md-11 col-11 pt-5'>
          
          <Swiper
         slidesPerView={4}
        spaceBetween={10}
        autoplay = {true}
        modules={[Autoplay]}
      >
        {
        this.state.data.home.Swiper.map((obj)=>(
          <SwiperSlide>
            <div className="container justify-content-center flex-column  col-lg-10 col-md-10 col-sm-12">
            <img src={obj.images} alt="" className=' d-flex justify-content-center'/>
            <p  style={{textAlign:"center",fontSize:"11px"}}>{obj.title}</p>
              </div>
          </SwiperSlide>
        ))
        }
      </Swiper>
      </div>
      </div>
        </div>

    )
  }
}
