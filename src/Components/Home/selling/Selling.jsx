import React, { Component } from 'react'
import data from '../../../Datafile'
import {Swiper,SwiperSlide} from "swiper/react"

export default class Selling extends Component {
    state={
        data:data
    }
  render() {
    return (
        <div className="container ">
      <div>
          <h2 className=' text-center mt-5'>
          {this.state.data.home.Top.sel}
          </h2>
          <Swiper
         slidesPerView={4}
        spaceBetween={10}
      >
        {
        this.state.data.home.Sellings.map((obj)=>(
          <SwiperSlide>
              <div className=" w-75">
            <div className="d-flex justify-content-center flex-column col-lg-12 col-md-10 col-sm-12">
            <img src={obj.image} alt="" className='d-flex justify-content-center'/>
            <p className='mt-2' style={{textAlign:"center",fontSize:"14px"}}>{obj.tit}</p>
              </div>
                  </div>
          </SwiperSlide>
        ))
        }
      </Swiper>
          </div>
         </div>
    )
  }
}
