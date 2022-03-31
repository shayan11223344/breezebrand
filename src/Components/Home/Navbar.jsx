import React, { Component } from 'react'
import data from '../../Datafile'
// import { IconName } from "react-icons/ai";

export default class Navbar extends Component {

    state = {
        data:data
    }
    render() {
        //   console.log(this.state.data.home);
        return (
            <div className='w-100 bg-light'>
                <div className="bg-light container d-flex justify-content-lg-end justify-content-md-end justify-content-center">

                    <ul className='list-unstyled d-flex  position-relative justify-content-evenly col-lg-2  col-md-3 col-6 text-sm-center' style={{ top: "10px", fontSize: "10px" }}>

                        <li className='d-lg-block d-md-block d-none'>
                            {this.state.data.home.Nav1.help}
                        </li>

                        <li className=" d-lg-block d-md-block d-none">
                            {this.state.data.home.Nav1.track}
                        </li>

                        <li>
                            {this.state.data.home.Nav1.number}
                        </li>
                    </ul>

                  
                </div>
            </div>
        )
    }
}
