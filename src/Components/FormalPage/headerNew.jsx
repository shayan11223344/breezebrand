import React, { Component } from 'react'
import data from '../../Datafile'
import {Link} from "react-router-dom"
export default class headerNew extends Component {
    state = {
        data: data
    }
    render() {
        return (
            <div className='container'>
                <img src={this.state.data.NewIn.Frm.imge} />

                    <div className="mt-2 mb-2" style={{fontSize:"17px"}}>
                <Link to="/home" className="mt-3 mb-3">
                    {this.state.data.NewIn.tag.hom}

                </Link>
                {this.state.data.NewIn.Frm.formal}
                        </div>

            </div>
        )
    }
}
