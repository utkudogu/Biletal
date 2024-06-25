import React from 'react'
import Foto1 from "../assets/istanbul.jpg";
import Foto2 from "../assets/kars.jpg";
import Foto3 from "../assets/paris.jpg";
import Foto4 from "../assets/bali.jpg";
import Foto5 from "../assets/ısparta.jpg";
import Foto6 from "../assets/hawaii.jpg";




function PopulerRotalar() {
  return (



<body>
    <header>
        <div class="card-container">
            <div class="card">
            <img src={Foto1} alt="Fotoğraf 3"/>
            <div class="card-content">
                    <h3>İSTANBUL</h3>
                    <p>899 TL</p>
                </div>
            </div>
            <div class="card">
            <img src={Foto2} alt="Fotoğraf 3"/>
            <div class="card-content">
                    <h3>KARS</h3>
                    <p>1359 TL</p>
                </div>
            </div>
            <div class="card">
            <img src={Foto3} alt="Fotoğraf 3"/>
            <div class="card-content">
                    <h3>PARİS</h3>
                    <p>5999 TL</p>
                </div>
            </div>
            <div class="card">
            <img src={Foto4} alt="Fotoğraf 3"/>
            <div class="card-content">
                    <h3>BALİ</h3>
                    <p>6349 TL</p>
                </div>
            </div>
            <div class="card">
            <img src={Foto5} alt="Fotoğraf 3"/>
            <div class="card-content">
                    <h3>ISPARTA</h3>
                    <p>366TL</p>
                </div>
            </div>
            <div class="card">
            <img src={Foto6} alt="Fotoğraf 3"/>
            <div class="card-content">
                    <h3>HAWAİİ</h3>
                    <p>8739 TL</p>
                </div>
            </div>
        </div>
    </header>
</body>





















  )
}

export default PopulerRotalar