import React, { Component } from 'react'
import data from '../../../Datafile'
// import {Link} from "react-router-dom"
export default class Lfooter extends Component {
    state={
        data:data
    }
  render() {
    return (
        <div className="">
      <div className='d-flex flex-column align-items-center pt-3'>
          <h3>
          {this.state.data.home.lfooter.head}
          </h3>
          <p>
          {this.state.data.home.lfooter.para}
          </p>

          <div className=" col-lg-auto col-md-auto text-center w-100">
          <input type="text" placeholder='Enter your email address' className='w-25 p-2'/>
          <button className='btn border mx-3'>
              {this.state.data.home.lfooter.btn}
          </button>
              </div>
      </div>
        <div className="d-flex justify-content-evenly list-unstyled mt-5 col-lg-12 col-md-5 col-12" style={{lineHeight:"30px",}}>
            <div className="">
            {/* {this.state.data.home.inform.map((obj)=>{
                return(
                    <li>
                            {obj.tit}
                        </li>
                )
            })} */}
            <li style={{fontSize:"16px",fontWeight:"500"}}>
                {this.state.data.home.inform.tit1}
            </li>

            <li>
                {this.state.data.home.inform.tit2}
            </li>
            <li>
                {this.state.data.home.inform.tit3}
            </li>

            <li>
                {this.state.data.home.inform.tit4}
            </li>
            <li>
                {this.state.data.home.inform.tit5}
            </li>
            <li>
                {this.state.data.home.inform.tit6}
            </li>
            </div>
            <div className="">

            <li style={{fontSize:"16px",fontWeight:"500"}}>
                {this.state.data.home.comapny.tit1}
            </li>
            <li>
            {this.state.data.home.comapny.tit2}

            </li>
            
            <li>
            {this.state.data.home.comapny.tit3}

            </li>

            
            <li>
            {this.state.data.home.comapny.tit4}

            </li>
            </div>

            <div className="">
                <li style={{fontSize:"16px",fontWeight:"500"}}>{this.state.data.home.help.tit0}</li>
                    <li >{this.state.data.home.help.tit1}</li>
                    <li>{this.state.data.home.help.tit2}</li>
                    <li>{this.state.data.home.help.tit3}</li>
                    <li>{this.state.data.home.help.tit4}</li>



                    </div>
                    <div className="">
                        <li style={{fontSize:"16px",fontWeight:"500"}}>
                            {this.state.data.home.contact1.tit5}
                            </li>
                            <li>

                            {this.state.data.home.contact1.tit6}
                            </li>
                            <li>

                            {this.state.data.home.contact1.tit7}
                            </li>
                        
                        </div>
                        
                </div>
                <hr/>
                <div className="container d-flex justify-content-between pt-2 mb-2">
                            <p>{this.state.data.home.lst.tit1}</p>
                            <p>{this.state.data.home.lst.tit2}</p>

                            </div>

                
            </div>
    )
  }
}