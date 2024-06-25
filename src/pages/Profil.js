import React from 'react'
import { Link } from 'react-router-dom';

function Profil() {
  return (
    <body>

    <body>
        <section>
            <div class="form-box">
                <div class="form-value">
                <form>
                      <h2>Giriş Yap</h2>
                      <div class="inputbox"> <ion-icon name="mail-outline"></ion-icon> <input type="email" required/>
                          <label>Email</label>
                      </div>
                      <div class="inputbox"> <ion-icon name="lock-closed-outline"></ion-icon> <input type="password"
                              required/> <label>Şifre</label> </div>
                      <div class="forget"> <label><input type="checkbox"/>Beni Hatırla</label> 
                              </div> 

                      <div class="yeniAlana">
                        <Link to="/SifremiUnuttum">Sifremi Unuttum</Link>
                      </div>
                              
                              
                              <button>Giriş Yap</button>

                      <div class="register">
                          <p>Hesabın yok mu?    <Link to="/Kaydol">Hesabın yok mu?</Link>                          </p>
                      </div>
                  </form>
                </div>
            </div>
        </section> 
    </body>
</body>



    
  )
}

export default Profil