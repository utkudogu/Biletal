import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../assets/banner2.jpg"

function Home() {
  return (
    <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>Sizin İçin En Uygun Bilet</h1>
        <p>BURADA</p>
        <Link to="/Arama">
        <button>biletimi bul</button>
        </Link>
      </div>
    </div>
  )
}

export default Home