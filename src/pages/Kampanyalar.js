import React from 'react'
import Logo1 from "../assets/birinci.png";
import Logo2 from "../assets/ikinci.png";
import Logo3 from "../assets/ucuncu.jpg";


function Kampanyalar() {
  return (

<body>
    <header>
        <div class="card-container">
            <div class="card">
                <img src={Logo1} alt="Fotoğraf 1"/>
                <div class="card-content">
                   
                </div>
            </div>
            <div class="card">
                <img src={Logo2} alt="Fotoğraf 2"/>
                <div class="card-content">
                   
                </div>
            </div>
            <div class="card">
                <img src={Logo3} alt="Fotoğraf 3"/>
                <div class="card-content">
                    
                </div>
            </div>
        </div>
    </header>
</body>
  )
}

export default Kampanyalar