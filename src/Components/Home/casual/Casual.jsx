import React, { Component } from 'react'
import data from '../../../Datafile'

export default class Casual extends Component {
    state = {
        data: data
    }
    render() {
        

        return (

            <div className=" mt-5">
                <h1 className='text-center'>{this.state.data.home.Casual.cas}</h1>

                <div className='container d-flex justify-content-evenly flex-wrap '>
                    {this.state.data.home.casu.map((obj) => {
                        return (
                            <div className='col-lg-4 p-lg-3 d-flex pt-4 position-relative  '>
                                <img src={obj.pic} className="w-100 imgDiv"/>
                         
                         
                                <div className="position-absolute list-unstyled text-white d-flex flex-column align-items-start " style={{ top: "230px", fontSize: "16px", fontWeight: "", letterSpacing: "3px", lineHeight: "38px", marginLeft: "20px" }}>
                                    <li>{obj.tit1}</li>
                                    <li>{obj.tit2}</li>
                                    <li>{obj.tit3}</li>
                                    <li>{obj.tit4}</li>
                                    <li>{obj.tit5}</li>




                                </div>
                            </div>


                        )
                    })}
                </div>
            </div>
        )
    }
}
