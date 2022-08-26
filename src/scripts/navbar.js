
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
   searcheng.onkeyup=()=>{
      getData1()
   }
   
   searcheng.type="search"
   div.append(searcheng)
   cont.append(div)
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
contra.append(h,h1);
let del=document.getElementById("delete")
del.onclick=()=>{
   delete1()
}
let delete1=()=>{
   offcanvasMenu.classList.remove('active');
}

// side nav end
let id=document.getElementById("search1");
  let getData1=async(id)=>{
   // let query=document.getElementById("search1").value;
   let res=await fetch (`https://still-chamber-16033.herokuapp.com/makeup_data?name=${id}`);
   let data=await res.json();
   console.log(data)
  }
  getData1()
  
  let appendr=(data)=>{
   let cont=docume.getElementById("container1")
   cont.innerHTML=null;
   data.forEach(()=>{
      let h=document.createElement("div");
      let h2=document.createElement("img");
      h2.setAttribute("class","img1");
      let h1

   })
  }
let data=async()=>{
   
   let res=await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data`);
  
   let data=await res.json()
   console.log(data)
}
data();
let jhola1=()=>{
let jhol=JSON.parse(localStorage.getItem("jhola"))||[];
let cont=document.createElement("container4")
cont.innerHTML=null;
let hdiv=document.createElement("div");
let h1=document.createElement("img")
let h2=document.createElement("p")
let h3=document.createElement("h5");
let h4=document.createElement("h6");
let hdiv1=document.createElement("div")
let h5=document.createElement("img")
let h6=document.createElement("h5");
let h7=document.createElement("button")
hdiv.innerText="FREE RETURNS IN ALL ORDERS"
}
jhola1();

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
