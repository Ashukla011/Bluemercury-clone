
   import { header,footer } from "../raghav component/navbar.js";
   document.getElementById("head").innerHTML=header();
   document.getElementById("foot").innerHTML=footer();
   let search=document.getElementById("rsearch")
   search.onclick=()=>{
      rgetData()
   }
  let  rgetData=()=>{
   let cont=document.getElementById("rcontainer")
   cont.innerHTML=null;
   let searcheng=document.createElement("input");
   searcheng.setAttribute("id","search1");
   searcheng.placeholder="SEARCH"
   searcheng.type="search"
   cont.append(searcheng)
  }
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
h.innerText="Product"
let h1=document.createElement("h3")
h1.innerText="Add To cart"
contra.append(h,h1)
  let rappend=document.getElementById("search1");
  rappend.onclick=()=>{
   getData1()
  }
  let getData1=async()=>{
   let query=document.getElementById("search1").value;
   let res=await fetch("");
   let data=res.json();
   console.log(data)
   appendr(data)
  }
  let appendr=(data)=>{
   let cont=document.getElementById("container1")
   cont.innerHTML=null;
   data.forEach(()=>{
      let h=document.createElement("div");
      let h2=document.createElement("img");
      h2.setAttribute("class","img1");
      

   })
  }
let nav=document.getElementsByClassName("heading_one")
nav.onclick=()=>{
   navopen()
}
