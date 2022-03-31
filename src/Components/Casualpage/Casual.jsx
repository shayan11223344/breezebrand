import React, { Component } from 'react'
import Child from "./Childnew"
import Head from "./headerNew"
import Pict from "./NewPict"

export default class Casual extends Component {
  render() {
    return (
      <div>
          <Head/>
          <Child/>
          <Pict/>
      </div>
    )
  }
}
