import React, { Component } from 'react'
import data from '../../../Datafile'
export default class Image extends Component {
  state = {
    data: data
  }
  render() {
    return (
      <div className="container">
        <div className='d-flex justify-content-center mt-5 mb-3'>
          <img src={this.state.data.home.main.image} style={{ width: "100%" }} />
        </div>
      </div>
    )
  }
}
