function sidebar() {
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
      <div id="fil_add"> Category
              <span id="prod_one" class="material-icons"
                >add</span
              >
              </div>

          <ul class="hide4">
          <div class="li_check">
              <input type="checkbox" />
              <li id="powder">Powder</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="cream">Cream</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="pencil">Pencil</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="liquid">Liquid</li>
              </div>
                       
          </ul>
      </li>
      </ul>
      <hr/>

      <ul>
<li id="filter">
<div id="fil_add"> Product Type
              <span id="prod_two" class="material-icons"
                >add</span
              >
              </div>
  
    <ul class="hide5">
    <div class="li_check">
              <input type="checkbox" />
              <li id="blush">Blush</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="bronzer">Bronzer</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="eyebrow">Eyebrow</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="eyeliner">Eyeliner</li>
              </div>
      
    </ul>
</li>
</ul>
<hr/>

<ul>
<li id="filter">
<div id="fil_add"> Tagslist
              <span id="prod_three" class="material-icons"
                >add</span
              >
              </div>
    <ul class="hide6">
    <div class="li_check">
              <input type="checkbox" />
              <li id="organic">Organic</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="sugarfreer">Sugar Free</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="vegan">vegan</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="alcohalfreer">Alcohal Free</li>
              </div>
              <div class="li_check">
              <input type="checkbox" />
              <li id="oilfree">Oil Free</li>
              </div>
       
    </ul>
</li>
</ul>
<hr/>


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
// <<<<<<< HEAD
function sortby() {
  return ` 
  <select name="" id="_sort">
  <option value="">Featured</option>`
}
function sortby(){
  return  ` <select name="" >
  <option value="" >Featured</option>
  <option value="">New Arrivals</option>
  <option value="">Best Sellers</option>
  <option value="lth" >Price,Low to High</option>
  <option value="htl">Price,High to Low</option>
 </select>` 
}
export { sidebar, sortby };