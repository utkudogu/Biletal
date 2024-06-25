import React from 'react'

function Arac() {
  return (

<body>
    <header>
        <h1>ARACINIZI EN UYGUN FİYATA BİLETAL'DA KİRALAYIN</h1>
    </header>
    <main>
        <div class="rental-form-container">
            <form id="rental-form" action="" method="post">
                
                
                <div class="form-group">
                    <label for="car-type">Araç Türü:</label>
                    <select id="car-type" name="car-type" required>
                        <option value="">Seçiniz</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="convertible">Convertible</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="pickup-location">Alış Noktası:</label>
                    <input type="text" id="pickup-location" name="pickup-location" placeholder="Şehir veya Havaalanı" required/>
                </div>
                
                <div class="form-group">
                    <label for="pickup-date">Alış Tarihi:</label>
                    <input type="date" id="pickup-date" name="pickup-date" required/>
                </div>
                
                <div class="form-group">
                    <label for="dropoff-date">Teslim Tarihi:</label>
                    <input type="date" id="dropoff-date" name="dropoff-date" required/>
                </div>
              
                
                <div class="form-group">
                    <button type="submit">ARA</button>
                </div>
            </form>
        </div>
    </main>
</body>



















  )
}

export default Arac