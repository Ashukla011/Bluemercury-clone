//header and footer

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
let cont=docume.getElementById("container1")
cont.innerHTML=null;
data.forEach(()=>{
   let h=document.createElement("div");
   let h2=document.createElement("img");
   h2.setAttribute("class","img1");
   let h1

})
}
let nav=document.getElementsByClassName("heading_one")
nav.onclick=()=>{
navopen()
}
let navopen=()=>{


}



//slider code
window.addEventListener("load",function(){
    start ()
})

let i=0;
function start(){
    let arr=["FREE SHIPPING FROM BLUEWARDS MEMBERS","FREE GIFTS WITH PURCHASE BROWSE NOW", "FREE SAMPLES WITH ALL ORDERS"]
     let Acon=document.getElementById("Aslider")

     setInterval(()=>{
        if(i===arr.length){
            i=0;
        }
        Acon.innerHTML=null;
        let fist_heading=arr[i]

        let p=document.createElement("p")
        p.innerText=fist_heading;
        Acon.append(p)
        i++
     },2000)

}