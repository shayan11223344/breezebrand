import React, { Component } from 'react'
import data from "../../Datafile"
import { AiOutlineSearch, AiOutlineUser, AiFillShopping } from "react-icons/ai";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom"


export default class navbar2 extends Component {
    state = {
        data: data
    }

    render() {
        //   console.log(this.state.data.Nav2);
        return (
            <div className="d-flex  position-sticky p-2 bg-white" style={{top:"0",zIndex:"2"}}>
            <div className='d-flex conatiner  p-0 w-100'>
                <div className="w-100 p-0 container">

                    <Navbar expand="lg" className='bg-white d-flex  w-100 '>
                        <Container fluid={true} className='col-11 w-100 d-flex'>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
                            <Navbar.Brand className='mx-lg-auto mx-md-auto mx-auto' >
                         
                                <h1 className='' style={{ fontFamily: "icomoon", }} >
                         <Link to ="/" style={{textDecoration:"none",color:"black"}}>
                                    <i>
                                        Breez'e
                                    </i>
                         </Link>
                                </h1>
                         
                            </Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="col-lg-6 col-md-6 col-4 d-flex justify-content-evenly w-100" style={{ textDecoration: "none" }}>

                                    <Link to="/newIn" style={{textDecoration:"none",color:"black"}}>
                                            {this.state.data.home.Nav2.new}

                                    </Link>
                                    
                                    <Link to="/Casual1" style={{textDecoration:"none",color:"black"}}>
                                            {this.state.data.home.Nav2.cas}
                                    </Link>

                                    <Link to="/Formal" style={{textDecoration:"none",color:"black"}}>
                                            {this.state.data.home.Nav2.for}

                                    </Link>

                                    <Link to="/Print" style={{textDecoration:"none",color:"black"}}>
                                            {this.state.data.home.Nav2.print}

                                    </Link>

                                    <Link to="/Shawls" style={{textDecoration:"none",color:"black"}}>
                                            {this.state.data.home.Nav2.shawls}
                                    </Link>
                                    <Link to="/Bottom" style={{textDecoration:"none",color:"black"}}>
                                            {this.state.data.home.Nav2.bott}

                                    </Link>

                                    <Link to="/Breeze" style={{textDecoration:"none",color:"black"}}>
                                            {this.state.data.home.Nav2.breeze}

                                    </Link>
                                    <Link to="/Look" style={{textDecoration:"none",color:"black"}}>
                                            {this.state.data.home.Nav2.look}

                                    </Link>


                                    <Link to="/Sale" style={{textDecoration:"none",color:"black"}}>
                                            {this.state.data.home.Nav2.sale}

                                    </Link>
                                </Nav>
                            </Navbar.Collapse>

                        </Container>


                    </Navbar>
                </div>
                
            </div>
            <div className='container d-flex' style={{ width: "10%", fontSize: "20px" }}>
                    <div className=" container d-flex justify-content-between align-items-center col-12">
                        <AiOutlineSearch />
                        <AiOutlineUser />
                        <AiFillShopping />
                    </div>
                </div>

            </div>
        )
    }
}



