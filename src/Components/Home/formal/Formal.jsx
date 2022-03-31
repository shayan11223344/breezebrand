import React, { Component } from 'react'
import data from '../../../Datafile'

export default class Formal extends Component {
    state={
        data:data
    }
  render() {
    return (
      <div className='container d-flex flex-column align-items-center position-relative'>
          <h2 className=''>
          {this.state.data.home.Formal.form}
          </h2>
          <div className="container p-0">    
          <img src={this.state.data.home.Formal.pict}  style={{width:"100%"}} />
              </div>
          <div className="position-absolute d-flex flex-column text-white align-items-start  w-75 list-unstyled" style={{top:"200px",left:"40px",lineHeight:"30px",fontWeight:"600"}}>
          <li>{this.state.data.home.Formal.title1}</li>
          <li>{this.state.data.home.Formal.title2}</li>
          <li>{this.state.data.home.Formal.title3}</li>
          <li>{this.state.data.home.Formal.title4}</li>
              </div>
      </div>
    )
  }
}
