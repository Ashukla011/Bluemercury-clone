//header and footer



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