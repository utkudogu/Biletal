import React from 'react'
import Logo from "../assets/logo6.png";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='rightSide'>
          <Link to="/">Anasayfa</Link>
          <Link to="/Arac">Araç Kiralama</Link>
          <Link to="/Otel">Otel Rezervasyonu</Link>
          <Link to="/PopulerRotalar">Popüler Rotalar</Link>
          <Link to="/Kampanyalar">Kampanyalar</Link>
          <Link to="/Destek">Destek</Link>
          <Link to="/Profil">Profil</Link>


        </div>
    </div>
  )
}

export default Navbar