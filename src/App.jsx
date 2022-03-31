import React, { Component } from 'react'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components/Home/swiper/style.css"
import "./Components/Home/casual/styless.css"
import Navbar from './Components/Home/Navbar';
import Navbar2 from './Components/Home/Navbar2';
import Lfooter from './Components/Home/Lfooter/Lfooter';
import { Routes, Route } from 'react-router-dom';
import NewIn1 from './Components/NewIn/NewIn1';
import "./Components/NewIn/Style.css"
import Casual2 from "./Components/Casualpage/Casual"
import Formal from "./Components/FormalPage/FormalPage"
import Print from "./Components/Print/Print"
import Shawls from "./Components/Shawls/Shawl"
import Bottom from "./Components/bottom/Bottom"
import Breeze from "./Components/Breeze/Breeze"
import Look from "./Components/Look/Look"
import Sale from "./Components/Sale/Sale"


export default class App extends Component {
  render() {
    return (
      <div className='bg-white'>
        <Navbar />
        <Navbar2 />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/newIn" element={<NewIn1 />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/casual1" element={<Casual2 />}></Route>
          <Route path="/formal" element={<Formal />}></Route>
          <Route path="/print" element={<Print />}></Route>
          <Route path="/Shawls" element={<Shawls />}></Route>
          <Route path="/Bottom" element={<Bottom />}></Route>
          <Route path="/Breeze" element={<Breeze />}></Route>
          <Route path="/Look" element={<Look />}></Route>
          <Route path="/Sale" element={<Sale />}></Route>
        </Routes>




        <Lfooter />
      </div>
    )
  }
}
