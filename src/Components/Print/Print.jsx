import React, { Component } from 'react'
import data from '../../Datafile'
import Child from "./Childnew"
import Head from "./headerNew"
import New from "./NewPict"
export default class Print extends Component {
    state={
        data:data
    }
  render() {
    return (
      <div>
          <Head/>
          <Child/>
          <New/>
      </div>
    )
  }
}
