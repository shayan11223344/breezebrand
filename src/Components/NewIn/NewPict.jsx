import React, { Component } from 'react'
import data from '../../Datafile'
export default class NewPict extends Component {
    state = {
        data: data
    }
    render() {
        return (
            <div className='container d-flex flex-wrap justify-content-center'>
                {this.state.data.NewIn.pictures.map((e) => {
                    return (
                        <div className="position-relative col-lg-3 px-3">
                            <div className="pic1 col-12 mt-4">
                                <img src={e.pic} style={{ width: "100%", height: "100%" }} />
                                <div className="mt-3">
                                <h6>{e.tit}</h6>
                                <p>{e.tit1}</p>
                                    </div>

                                <div className="pic2 col-12 position-absolute">
                                    <img src={e.pic1} style={{ width: "100%", height: "100%" }} />
                                    
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>
        )
    }
}
