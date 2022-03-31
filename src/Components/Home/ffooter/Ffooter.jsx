import React, { Component } from 'react'
import data from '../../../Datafile'

export default class Ffooter extends Component {
    state={
        data:data
    }
  render() {
    return (
        <div className="">
      <div className='position-relative mt-5'>
          <img src={this.state.data.home.Ftr.image} style={{width:"100%"}} />
          <div className="position-absolute col-lg-auto col-md-auto col-9 " style={{top:"50%",right:"10%"}}>
          <button className='btn border border-white pl-5 p-3 text-white'>
              {this.state.data.home.Ftr.btn}
          </button>
               </div>
      </div>
            </div>
    )
  }
}
