let arr=[]||JSON.parse(localStorage.getItem("user"))

function nextPage(event) {
       event.preventDefault();
       let email = document.getElementById("Email").value;
       let fname = document.getElementById("Payment_username").value;
       let lname = document.getElementById("Payment_lastname").value;
       let add1 = document.getElementById("Payment_address").value;
       let x=new Form(email,fname,lname,add1)
       arr.push(x);
       console.log(arr)
       localStorage.setItem("user",JSON.stringify(arr));
       if (email.length < 1 || fname.length < 1 || lname.length < 1 || add1.length < 1) {
           alert("Enter Valid Details!");
       } else {
           window.location.href ="payment2.html";
       }   
   }
   class Form{
       constructor(a,b,c,d){
              this.email=a;
              this.fname=b;
              this.lname=c;
              this.add=d;
       }
   }

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




function payRight() {
       let rightAdd = localStorage.getItem("jhola");
       let rightConvert = JSON.parse(rightAdd);
       // console.log(rightConvert)
   
       rightConvert.forEach(function (item) {
           let where = document.getElementById("p-right-section");
   
           let data = `<div class="p-grid">
           <div>
             <img src="${item.image}" alt="">
             <div>
               <p>${item.brand}</p>
               <p>${item.name}</p>
             </div>
             <div class="get-price">$${item.price}</div>
           </div>
         </div>
         <hr style="width: 80%; margin: auto;">`;
   
         where.innerHTML += data;
       })
   }
   payRight();




   function payMoney(event) {
       event.preventDefault();
   
       let cardNo = document.getElementById("cardno").value;
       let cardName = document.getElementById("cardname").value.trim();
       let exp = document.getElementById("expiry").value;
       let code = document.getElementById("code").value;
   
       if (cardNo.length === 16 && cardName.length > 0 && exp.length > 3 && code.length >= 4) {
           localStorage.removeItem("bluemercuryCart")
   
           setTimeout(function () {
               alert("Paymet Successful!");
               window.location.href = "index.html";
           }, 2000);
       } else {
           alert("Invalid Details!")
       }
   }