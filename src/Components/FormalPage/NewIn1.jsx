import React, { Component } from 'react'
import ChildNew from './Childnew'
import HeaderNew from './headerNew'
import NewPict from './NewPict'
export default class NewIn1 extends Component {
  render() {
    return (
      <div className='bg-white'>
          <ChildNew/>
          <HeaderNew/>
          <NewPict/>
      </div>
    )
  }
}
