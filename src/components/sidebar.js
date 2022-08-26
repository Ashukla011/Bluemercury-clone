function sidebar(){
  return `
  <div id="main_side">
  <div id="side_top">
      <h3>NEW ARRIVALS CATEGORY</h3>
      <p>Select One to narrow results</p>
      <hr>

      <h4>Bath & Body</h4>
      <h4>Fragrance</h4>
      <h4>Hair Care</h4>
      <h4>Makeup</h4>
      <h4>Skin Care</h4>
      <h4>Tools & Accessories</h4>
  </div>
  <div id="side_bottom">
      <h3>FILTER NEW ARRIVALS BY</h3>
      <ul>
          <li id="filter">
              <div id="fil_add"> Type
              <span id="fil_one" class="material-icons"
                >add</span
              >
              </div>
              <ul class="hide">
              <div class="li_check">
              <input type="checkbox" />
              <li id="canadian">Canadian</li>
              </div>

                 <div class="li_check">
              <input type="checkbox" />
              <li id="certClean" >CertClean</li>
              </div>

              <div class="li_check">
              <input type="checkbox" />
              <li id="chemicalFree">Chemical Free</li>
              </div>

              <div class="li_check">
              <input type="checkbox" />
              <li id="dairyFree">Dairy Free</li>
              </div>

              <div class="li_check">
              <input type="checkbox" />
              <li id="verified">EWG Verified</li>
              </div>

              <div class="li_check">
              <input type="checkbox" />
              <li id="fairTrade">Fair Trade</li>
              </div>

              <div class="li_check">
              <input type="checkbox" />
              <li id="glutenFree">Gluten Free</li>
              </div>

              <div class="li_check">
              <input type="checkbox" />
              <li id="hypoallergenic">Hypoallergenic</li>
              </div>

              <div class="li_check">
              <input type="checkbox" />
              <li id="natural">Natural</li>
              </div>

              <div class="li_check">
              <input type="checkbox" />
              <li id="noTalc">No Talc</li>
              </div>
            
              </ul>
          </li>
        </ul>
        <hr/>

        <ul>
        <li id="filter">
            <div id="fil_add"> Brand
             <span id="fil_two" class="material-icons"
               >add</span
             >
             </div>
            <ul class="hide2">
            <div class="li_check" onclick="csearch">
            <p id="almay" >Almay</p>
            </div>

            <div class="li_check">
            <input type="checkbox" />
            <li id="alva">Alva</li>
            </div>

            <div class="li_check">
            <input type="checkbox" />
            <li id="annasui">Anna Sui</li>
            </div>

            <div class="li_check">
            <input type="checkbox" />
            <li id="annabelle">Annabelle</li>
            </div>

            <div class="li_check">
            <input type="checkbox" />
            <li id="benefit">Benefit</li>
            </div>

            <div class="li_check">
            <input type="checkbox" />
            <li id="boosh">Boosh</li>
            </div>

            <div class="li_check">
            <input type="checkbox" />
            <li id="BurtBees">Burt's Bees</li>
            </div>

            <div class="li_check">
            <input type="checkbox" />
            <li id="butterLondon">Butter London</li>
            </div>

            <div class="li_check">
            <input type="checkbox" />
            <li id="cargoCosmetics">Cargo Cosmetics</li>
            </div>

            <div class="li_check">
            <input type="checkbox" />
            <li id="chinaGlaze">China Glaze</li>
            </div>
         
            </ul>
        </li>
      </ul>
      <hr/>

      <ul>
      <li id="filter">
         <div id="fil_add">
          Benefit
          <span id="dress1" class="material-icons"
            >add</span
          >
          </div>
       
      </li>
    </ul>
    <hr/>

    <ul>
    <li id="filter">
    <div id="fil_add">
         Concern
        <span id="dress1" class="material-icons"
          >add</span
        >
        </div>  
    </li>
  </ul>
  <hr/>

  <ul>
  <li id="filter">
  <div id="fil_add">
       Ingredient Preference
      <span id="dress1" class="material-icons"
        >add</span
      >
      </div>
  </li>
</ul>
<hr/>


  </div>
</div>
  `
}
function sortby(){
  return  ` 
  <select name="" id="">
  <option value="" >Featured</option>
  <option value="">New Arrivals</option>
  <option value="">Best Sellers</option>
  <option value="">Price,Low to High</option>
  <option value="">Price,High to Low</option>
 </select>
  `
}
export {sidebar,sortby};