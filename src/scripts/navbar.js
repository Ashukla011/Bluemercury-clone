
   import { header,footer } from "../components/navbar.js";
   document.getElementById("head").innerHTML=header();
   document.getElementById("foot").innerHTML=footer();
   let search=document.getElementById("rsearch")
   search.onclick=()=>{
      rgetData()
   }
  let  rgetData=()=>{
   let cont=document.getElementById("rcontainer")
   cont.innerHTML=null;
   let div=document.createElement("div")
   let searcheng=document.createElement("input");
   searcheng.setAttribute("id","search1");
   searcheng.placeholder="SEARCH"
   searcheng.oninput=()=>{
      debounceFunction(main,1000)
   }
   
   searcheng.type="search"
   div.append(searcheng)
   cont.append(div)
  }
  let id
  async function myfunction(){
      var querry=document.querySelector("#search1").value
  let url=`https://still-chamber-16033.herokuapp.com/makeup_data?_page=3&_limit=30&product_type=${querry}`
  let res=await fetch(url)
  let product=await res.json()
  console.log(product)
  return product
}
function append (product){
   let c=document.getElementById("container1")
   c.innerHTML=null
   product.forEach(function(elem){
      let p=document.createElement("p")
      p.innerText=elem.name
      c.append(product)
   })

}
async function main(){
   let product=await myfunction()
   append(product)

}
function debounceFunction(func,delay){
   if(id)
   {
      clearTimeout(id)
   }
   id=setTimeout(function(){
      func()

   },delay)
}
// side nav start

  const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const offcanvasMenu = document.querySelector('.offcanvas-menu')

openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('active');
}); 
let contra=document.getElementById("container4")
contra.innerHTML=null;
let h=document.createElement("h3")
h.innerText="Your Bag"
h.setAttribute("id","yourbag")
let h1=document.createElement("img")
h1.src="https://cdn0.iconfinder.com/data/icons/interface-line-4/48/delete_close_cancel-256.png"
h1.setAttribute("id","delete")
let h11=document.createElement("button");
h11.innerText="VIEW BAG"
h11.setAttribute("id","vbag101")
contra.append(h,h1,h11);
h11.onclick=()=>{
   cartl()
}
let del=document.getElementById("delete")
del.onclick=()=>{
   delete1()
}

let delete1=()=>{
   offcanvasMenu.classList.remove('active');
}

let jhol=JSON.parse(localStorage.getItem("mycart"))||[];
for(var i=0;i<jhol.length;i++){
let hdiv=document.createElement("div");
hdiv.setAttribute("id","mc")
let hdiv1=document.createElement("div");
hdiv1.setAttribute("id","img101");
let hdiv2=document.createElement("div");
hdiv2.setAttribute("id","flexing")
let h3=document.createElement("h4");
h3.setAttribute("class","size123")
h3.innerText="FREE RETURNS ON ALL ORDERS"
let  h2=document.createElement("img");
h2.src=jhol[i].image_link
let h4=document.createElement("h5");
h4.innerText=jhol[i].brand
let h5=document.createElement("p");
h5.innerText=jhol[i].name
let h6=document.createElement("p");
let hdiv3=document.createElement("div");
hdiv3.setAttribute("id","button101")
let h7=document.createElement("button");
h7.innertext="-"
let h8=document.createElement("button");
h8.innerText="+"
let h9=document.createElement("p");
h9.innerText="1"
let h10=document.createElement("p");
h10.innerText="REMOVE"
h10.onclick=()=>{
   removal()
}
h10.setAttribute("class","re1")
hdiv3.append(h7,h9,h8);
let hdiv4=document.createElement("div")
hdiv4.setAttribute("id","flexing1")

h6.innerText=`$ ${jhol[i].price}`;
hdiv1.append(h2);
hdiv.append(h3);
hdiv2.append(h4,h5,h6);
hdiv4.append(hdiv1,hdiv2,hdiv3)
contra.append(hdiv,hdiv4,h10,h11)
}

// side nav end



// search bar
// let id=document.getElementById("search1");
//   let getData1=async(id)=>{
//    // let query=document.getElementById("search1").value;
//    let res=await fetch (`https://still-chamber-16033.herokuapp.com/makeup_data?name=${id}`);
//    let data=await res.json();
//    console.log(data)
//   }
//   getData1()
  
  let appendr=(data)=>{
   let cont=docume.getElementById("container1")
   cont.innerHTML=null;
   data.forEach(()=>{
      let h=document.createElement("div");
      let h2=document.createElement("img");
      h2.setAttribute("class","img1");
      // let h1

   })
  }
let data=async()=>{
   
   let res=await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data`);
  
   let data=await res.json()
   console.log(data)
}
data();
let email1=document.getElementById("email")
email1.onclick=()=>{
   mailSent()
}
function mailSent() {
   let email = document.getElementById("email").value;

   if (email != null) {
       setTimeout(function () {
           alert("Subscribed, you will receive daily tips on mail!");
           document.getElementById("email").value = null;
       }, 4000);
   }
}
let cartl=()=>{
window.location.href="cart.html"
}
let removal=()=>{
   let data=JSON.parse(localStorage.getItem("mycart"));
   localStorage.removeItem(data)
}