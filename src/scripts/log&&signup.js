
document.getElementById("A-button").addEventListener("click",function(){
    r()
})

async function r(){
    event.preventDefault()

    let formdata={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    password:document.getElementById("password").value,
    username:document.getElementById("username").value,
    
    }
formdata=JSON.stringify(formdata)
fetch("https://fierce-everglades-78490.herokuapp.com/api/todo",{
    method:'POST',
    body:formdata,
    headers:{
        'Content-Type':'application/json',

    },

})
.then((response)=>{
return response.json();
})
.then((response)=>{
   localStorage.setItem("s",JSON.stringify(response))
})
.catch((err)=>{
console.log(err)
})
};


// slider 

window.addEventListener("load",function(){
    start ()
})

let i=0;
function start(){
    let arr=["FREE SHIPPING FROM BLUEWARDS MEMBERS","FREE GIFTS WITH PURCHASE BROWSE NOW", "FREE SAMPLES WITH ALL ORDERS"]
     var Acon=document.getElementById("Aslider")

     setInterval(()=>{
        if(i===arr.length){
            i=0;
        }
        Acon.innerHTML=null;
        let fist_heading=arr[i]

        let data=document.createElement("p")
        
        data.innerText=fist_heading;
       
        Acon.append(data)
        i++
     },2000)

}