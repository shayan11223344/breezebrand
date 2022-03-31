import React, { Component } from 'react'
import data from '../../Datafile'
import {Carousel} from "react-bootstrap"

export default class Slider extends Component {

    state={
        data:data
    }
  render() {
    return (
      <div>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.data.home.Slider.image1}
      
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.data.home.Slider.image2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.state.data.home.Slider.image1}
      
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>


        
      </div>
    )
    }
}
