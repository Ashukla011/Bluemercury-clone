function addingData() {
       let data = localStorage.getItem("jhola");
       let dataConvert = JSON.parse(data);
   
       let i = 0;
       dataConvert.forEach(function (product) {
           let cartProducts = document.getElementById("cart-products");
   
           let dataAdding = `<div id="main${i}">
       <div id="divf${i}">
       <img src="${product.image}" alt=""></div>
       <div id="divs${i}">
           <p>${product.brand}</p>
           <p>${product.name}</p>
       </div>
       <div id="divt${i}">$${product.price}</div>
       <div id="divfo${i}">
           <button onclick="minus(divfo${i})">-</button>
           <p>1</p>
           <button onclick="plus(divfo${i})">+</button>
       </div>
       <div class="get-total">$${product.price}</div>
   </div>`
   
           let hrTag = `<hr style="width: 70%; margin: auto;">`
   
           cartProducts.innerHTML += dataAdding;
           cartProducts.innerHTML += hrTag;
           i++;
       })
   
   }addingData()
   
   
   function plus(val) {
       let id = val.id;
       let p = document.querySelector(`#${id} > p`);
       let previous = Number(p.textContent);
       previous++;
       p.textContent = previous;
   
       let next = document.querySelector(`#${id} + div`);
       let pre = val.parentNode.id;
   
       let find_pre = document.querySelector(`#${pre} > div:nth-child(3)`).textContent;
       let z = '';
       for (i = 1; i < find_pre.length; i++) {
           z += find_pre[i];
       }
       z = Number(z);
   
       next.textContent = `$${previous * z}`
       subTotal();
       localStorage.removeItem("bluemercuryFinalAmount");
       finalVal();
   }
   
   function minus(val) {
       let id = val.id;
       let p = document.querySelector(`#${id} > p`);
       let previous = Number(p.textContent);
       if (previous > 1) {
           previous--;
           let next = document.querySelector(`#${id} + div`).textContent;
           let nx = "";
   
           for (j = 1; j < next.length; j++) {
               nx += next[j];
           }
           nx = Number(nx);
   
           let pre = val.parentNode.id;
   
           let find_pre = document.querySelector(`#${pre} > div:nth-child(3)`).textContent;
           let z = '';
           for (i = 1; i < find_pre.length; i++) {
               z += find_pre[i];
           }
           z = Number(z);
   
           document.querySelector(`#${id} + div`).textContent = `$${nx - z}`
       }
       p.textContent = previous;
       subTotal()
       localStorage.removeItem("bluemercuryFinalAmount");
       finalVal()
   };
   
   
   function subTotal() {
       let all = document.querySelectorAll(".get-total");
       let chk = document.querySelector(".subtotal > p");
       let tot = 0;
   
       for (let i = 0; i < all.length; i++) {
           let only = "";
           for (let j = 1; j < all[i].textContent.length; j++) {
               only += all[i].textContent[j];
           }
           tot += Number(only);
       }
       chk.textContent = `$${tot}`;
   }
   
   subTotal()
   
   function finalVal() {
       if (localStorage.getItem("jhola1") === null) {
           localStorage.setItem("jhola1", JSON.stringify([]));
       }
       
       let store = localStorage.getItem("jhola1");
       let storeData = JSON.parse(store);
       if (storeData.length < 1) {
           let amo = document.querySelector(".subtotal > p").textContent;
       storeData.push({amount: amo});
       localStorage.setItem("jhola1", JSON.stringify(storeData))
       } 
   }
   finalVal();







  