import React, { Component } from 'react'
import Child from "./Childnew"
import Head from "./headerNew"
import Newpict from "./NewPict"


export default class FormalPage extends Component {
  render() {
    return (
      <div>
          <Head />
          < Child/>
          <Newpict/>
      </div>
    )
  }
}
