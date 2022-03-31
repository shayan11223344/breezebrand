import React, { Component } from 'react'
import data from '../../../Datafile'
export default class Shawls extends Component {
    state = {
        data: data
    }
    render() {
        return (
            <div className='container d-flex flex-column '>
                <h2 className='text-center pt-5'>
                    {this.state.data.home.Shawls.shal}
                </h2>

                <div className="d-flex flex-wrap jutify-content-center">
                    <div className="d-flex align-items-center flex-column col-lg-6 col-md-12 col-12 ">
                        <img src={this.state.data.home.Shawls.pict} className="w-100" />
                        <button className='btn p-3 border border-dark col-lg-6 col-md-10  col-12 font-weight-bold m-4'>

                            {this.state.data.home.Shawls.btn}

                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center  col-lg-6 col-md-12 col-12">
                        <img src={this.state.data.home.Shawls.pict1} className="w-100" />
                        <button className='btn p-3 border border-dark col-lg-6 col-md-10  col-12 font-weight-bold m-4'>

                            {this.state.data.home.Shawls.btn1}

                        </button>
                    </div>
                </div>

            </div>
        )
    }
}
