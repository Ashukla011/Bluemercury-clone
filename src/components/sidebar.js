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
                 Type
                <span id="dress1" class="material-icons"
                  >add</span
                >
                <ul class="hide">
                  <li id="canadian">Canadian</li>
                  <li id="certClean">CertClean</li>
                  <li id="chemicalFree">Chemical Free</li>
                  <li id="dairyFree">Dairy Free</li>
                  <li id="verified">EWG Verified</li>
                  <li id="fairTrade">Fair Trade</li>
                  <li id="glutenFree">Gluten Free</li>
                  <li id="hypoallergenic">Hypoallergenic</li>
                  <li id="natural">Natural</li>
                  <li id="noTalc">No Talc</li>
                </ul>
            </li>
          </ul>
          <hr/>

          <ul>
          <li id="filter">
               Brand
              <span id="dress1" class="material-icons"
                >add</span
              >
              <ul class="hide">
                <li id="almay">Almay</li>
                <li id="alva">Alva</li>
                <li id="annasui">Anna Sui</li>
                <li id="annabelle">Annabelle</li>
                <li id="benefit">Benefit</li>
                <li id="boosh">Boosh</li>
                <li id="BurtBees">Burt's Bees</li>
                <li id="butterLondon">Butter London</li>
                <li id="cargoCosmetics">Cargo Cosmetics</li>
                <li id="chinaGlaze">China Glaze</li>
              </ul>
          </li>
        </ul>
        <hr/>

        <ul>
        <li id="filter">
             Benefit
            <span id="dress1" class="material-icons"
              >add</span
            >
            <ul class="hide">
              <li id="lifestyle">Active Lifestyle</li>
              <li id="Tantiaging">Anti-Aging</li>
              <li id="antipollution">Anti-Pollution</li>
              <li id="aromatherapy">Aromatherapy</li>
              <li id="brightening">Brightening</li>
              <li id="colorenhancing">Color Enhancing</li>
              <li id="protection">Color Protection</li>
              <li id="colorsafe">Color Safe</li>
              <li id="colorcorrecting">Color-Correcting</li>
              <li id="curlenhancing">Curl Enhancing</li>
            </ul>
        </li>
      </ul>
      <hr/>

      <ul>
      <li id="filter">
           Concern
          <span id="dress1" class="material-icons"
            >add</span
          >
          <ul class="hide">
            <li id="acne">Acne And Blemishes</li>
            <li id="brassiness">Brassiness</li>
            <li id="breakage">Breakage</li>
            <li id="circulationt">Circulation</li>
            <li id="damage">Damage And Split Ends</li>
            <li id="dryness">Dryness</li>
            <li id="dullness">Dullness</li>
            <li id="radicals">Free Radicals</li>
            <li id="frizz">Frizz</li>
            <li id="heatdamage">Heat Damage</li>

          </ul>
      </li>
    </ul>
    <hr/>

    <ul>
    <li id="filter">
         Ingredient Preference
        <span id="dress1" class="material-icons"
          >add</span
        >
        <ul class="hide">
          <li id="allergy">Allergy Tested</li>
          <li id="antioxidants">Antioxidants</li>
          <li id="backachiol">Bakachiol</li>
          <li id="peroxide">Benzoyl Peroxide</li>
          <li id="biotin">Biotin</li>
          <li id="cbd">Cbd</li>
          <li id="charcoal">Charcoal</li>
        </ul>
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
    <option value="">Featured</option>
    <option value="">New Arrivals</option>
    <option value="">Best Sellers</option>
    <option value="">Price,Low to High</option>
    <option value="">Price,High to Low</option>
   </select>
    `
}
export {sidebar,sortby};