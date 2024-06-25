import React from 'react'

function Favoriler() {
  return (

<body>
    <div class="background">
        <div class="booking-form">
            <h5>YOLCUĞUNUZDA KALACAĞINIZ EN UYGUN OTELİ BİLETAL İLE BULUN</h5>
            <form action="index.php" method="post">
                <label for="name">KONUM</label>
                <input type="text" name="name" id="name" required/>
 
                <label for="email">FİYAT ARALIĞI</label>
                <input type="email" name="email" id="email" required/>
           
                <label for="destination">KİŞİ SAYISI</label>
                <input type="text" name="destination" id="destination" required/>
           
                <label for="departure-date">GİRİŞ TARİHİ:</label>
                <input type="date" name="departure-date" id="departure-date" required/>
               
                <label for="return-date">ÇIKIŞ TARİHİ</label>
                <input type="date" name="return-date" id="return-date" required/>

                <button type="submit">ARA</button>
            </form>
        </div>
    </div>
</body>















  )
}

export default Favoriler