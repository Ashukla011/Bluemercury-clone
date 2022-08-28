let data=JSON.parse(localStorage.getItem("user"));
console.log(data)
let cont=document.getElementById("cont");
cont.innerText=`Contact : - ${data[0].email}`
let butt=document.createElement("button")
cont.append(butt)
butt.innerText="Change"
butt.setAttribute("id","but3")
let method=document.getElementById("meth")
method.innerText=`Ship To : -   ${data[0].add}`
let shipped=document.getElementById("ship")
shipped.innerText="Method : -   Ground Shipping (3-7 days) ·"