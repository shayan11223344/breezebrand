import React, { Component } from 'react'
import data from '../../Datafile'

export default class NewIn extends Component {
    state = {
        data: data
    }
    render() {
        console.log(this.state.data.NewIn.newInSelect.price);
        return (
            <div className="">
                <div className='d-flex container justify-content-between'>
                    <div className="col-lg-2">

                        <select className='p-2 col-10'>
                            <option value="">
                                {this.state.data.NewIn.newInSelect.price}
                            </option>
                            {this.state.data.NewIn.NewInOpt.map((e) => {
                                return (
                                    <option value="" className=''>{e.pkr}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="col-lg-2">

                        <select className='p-2 col-10'>
                            <option value="">
                                {this.state.data.NewIn.newOne1.color1}
                            </option>
                            {this.state.data.NewIn.newOne.map((e) => {
                                return (
                                    <option value="">{e.color}</option>
                                )
                            })}
                        </select>
                    </div>


                    <div className="col-lg-2">

                        <select className='p-2 col-10'>
                            <option value="">
                                {this.state.data.NewIn.opt.opt0}
                            </option>
                            {this.state.data.NewIn.opt1.map((e) => {
                                return (
                                    <option value="">{e.opt3}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="col-lg-2">

                        <select className='p-2 col-10'>
                            <option value="">
                                {this.state.data.NewIn.type.typ}
                            </option>
                            {this.state.data.NewIn.type2.map((e) => {
                                return (
                                    <option value="">{e.typ}</option>
                                )
                            })}
                        </select>
                    </div>


                    <div className="col-lg-2">

                        <select className='p-2 col-10'>
                            <option value="">
                                {this.state.data.NewIn.sea.sea0}
                            </option>
                            {this.state.data.NewIn.sea1.map((e) => {
                                return (
                                    <option value="">{e.sea2}</option>
                                )
                            })}
                        </select>
                    </div>



                </div>
            </div>
        )
    }
}
