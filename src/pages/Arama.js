import React from 'react'

function Arama() {
  return (
    <body>
        <div class="booking-form-w3layouts">
   <form action="#" method="post">
      <h2 class="sub-heading-agileits">Milyonlarca ucuz uçak bileti bir arama uzağınızda.
      </h2>
      <div class="main-flex-w3ls-sectns">
         <div class="field-agileinfo-spc form-w3-agile-text1">
            <select class="form-control">
               <option>Nerden</option>
               <option value="Lorem Ipsum">istanbul</option>
               <option value="Adipiscing">ankara</option>
               <option value="Lorem Ipsum">kars</option>
               <option value="Adipiscing">paris</option>
               <option value="Lorem Ipsum">antalya</option>
               <option value="Adipiscing">adana</option>
            </select>
         </div>
         <div class="field-agileinfo-spc form-w3-agile-text2">
            <select class="form-control">
               <option>Nereye</option>
               <option value="Lorem Ipsum">van</option>
               <option value="Adipiscing">edirne</option>
               <option value="Lorem Ipsum">hamburg</option>
               <option value="Adipiscing">berlin</option>
               <option value="Lorem Ipsum"> amsterdam</option>
               <option value="Adipiscing">muğla</option>
            </select>
         </div>
      </div>
      <div class="main-flex-w3ls-sectns">
         <div class="field-agileinfo-spc form-w3-agile-text1">
            <select class="form-control">
               <option>Tercih edilen firma</option>
               <option value="American Airline">Hepsi</option>
               <option value="Delta Airlines">Türk Havayolları</option>
               <option value="Frontier Airline">Corendon</option>
               <option value="Jet Blue">Pegasus</option>
               <option value="Southwest Airlines">Lufthansa</option>
            </select>
         </div>
        
      </div>
      <div class="main-flex-w3ls-sectns">
         <div class="field-agileinfo-spc form-w3-agile-text1">
            <input id="datepicker" name="Text" type="text" placeholder="Gidiş Tarihi" value="" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required="" class="hasDatepicker"/>
         </div>
         <div class="field-agileinfo-spc form-w3-agile-text2">
            <input type="text" id="timepicker" name="Time" class="timepicker form-control hasWickedpicker" placeholder="Saat" value="" onkeypress="return false;"/>
         </div>
      </div>
      
      <div class="radio-section">
         <h6>Select your Fare</h6>
         <ul class="radio-buttons-w3-agileits">
            <li>
               <input type="radio" id="a-option" name="selector1"/>
               <label for="a-option">Tek Yön</label>
               <div class="check"></div>
            </li>
            <li>
               <input type="radio" id="b-option" name="selector1"/>
               <label for="b-option">Gidiş-Dönüş</label>
               <div class="check">
                  <div class="inside"></div>
               </div>
            </li>
         </ul>
         <div class="clear"></div>
      </div>
      <div class="main-flex-w3ls-sectns">
         <div class="field-agileinfo-spc form-w3-agile-text1">
            <input id="datepicker1" name="Text" type="text" placeholder="Dönüş Tarihi" value="" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required="" class="hasDatepicker"/>
         </div>
         <div class="field-agileinfo-spc form-w3-agile-text2">
            <input type="text" id="timepicker1" name="Time" class="timepicker form-control hasWickedpicker" placeholder="Saat" value="" onkeypress="return false;"/>
         </div>
      </div>
      
      
      <input type="submit" value="Uçuş Ara"/>
     
      
   </form>
</div>
    </body>


    

)
}

export default Arama