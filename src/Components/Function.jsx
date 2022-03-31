import React, { Component } from 'react'
// import data from '../Datafile'
export default class Function extends Component {

    state={
        data:data
    }
    handleChange=(e)=>{
      e.target.value
    }
    

  render() {
    return (

      <div>
      <select>
        <option onChange={this.handleChange}>no1</option>
        <option onChange={this.handleChange}>no2</option>
        <option onChange={this.handleChange}>no3</option>
        <option onChange={this.handleChange}>no4</option>

        </select>         
      </div>
    )
  }
}
