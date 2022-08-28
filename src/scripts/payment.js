// let arr=[]||JSON.parse(localStorage.getItem("user"));

// function nextPage(event) {
//        event.preventDefault();
//        let email = document.getElementById("Email").value;
//        let fname = document.getElementById("Payment_username").value;
//        let lname = document.getElementById("Payment_lastname").value;
//        let add1 = document.getElementById("Payment_address").value;
//        let x=new Form(email,fname,lname,add1)
//        arr.push(x);
//        console.log(arr)
//        localStorage.setItem("user",JSON.stringify(arr));
//        if (email.length < 1 || fname.length < 1 || lname.length < 1 || add1.length < 1) {
//            alert("Enter Valid Details!");
//        } else {
//            window.location.href ="payment2.html";
//        }   
//    }
//    class Form{
//        constructor(a,b,c,d){
//               this.email=a;
//               this.fname=b;
//               this.lname=c;
//               this.add=d;
//        }
//    }


   
//    function subTotal() {
//     let all = document.querySelectorAll(".get-total");
//     let chk = document.querySelector(".subtotal > p");
//     let tot = 0;

//     for (let i = 0; i < all.length; i++) {
//         let only = "";
//         for (let j = 1; j < all[i].textContent.length; j++) {
//             only += all[i].textContent[j];
//         }
//         tot += Number(only);
//     }
//     chk.textContent = `$${tot}`;
// }



// function payRight() {
//        let rightAdd = localStorage.getItem("mytotal");
//        let rightConvert = JSON.parse(rightAdd);
//        console.log(rightConvert)
   
//        rightConvert.forEach(function (item) {
//            let where = document.getElementById("p-right-section");
   
//            let data = `<div class="p-grid">
//            <div>
//              <img src="${item.image_link}" alt="">
//              <div>
//                <p>${item.brand}</p>
//                <p>${item.name}</p>
//              </div>
//              <div class="get-price">$${item.price}</div>
//            </div>
//          </div>
//          <hr style="width: 80%; margin: auto;">`;
   
//          where.innerHTML += data;
//        })
//    }
//    payRight();




//    function payMoney(event) {
//        event.preventDefault();
   
//        let cardNo = document.getElementById("cardno").value;
//        let cardName = document.getElementById("cardname").value;
//        let exp = document.getElementById("expiry").value;
//        let code = document.getElementById("code").value;
   
//        if (cardNo.length === 16 && cardName.length > 0 && exp.length > 3 && code.length >= 4) {
//            localStorage.removeItem("mycart")
   
//            setTimeout(function () {
//                alert("Paymet Successful!");
//                window.location.href = "index.html";
//            }, 2000);
//        } else {
//            alert("Invalid Details!")
//        }
//    }






// function payRight() {
//     let rightAdd = localStorage.getItem("mycart");
//     let rightConvert = JSON.parse(rightAdd);
//     // console.log(rightConvert)

//     rightConvert.forEach(function (prod) {
//         let where = document.getElementById("p-right-section");

//         let data = `<div class="p-grid">
//         <div>
//           <img src="${prod.image_link}" alt="">
//           <div>
//             <p>${prod.brand}</p>
//             <p>${prod.name}</p>
//           </div>
//           <div class="get-price">$${prod.price}</div>
//         </div>
//       </div>
//       <hr style="width: 80%; margin: auto;">`;

//       where.innerHTML += data;
//     })
// }
// payRight();

// function promoBefore() {
//     let rightAdd = localStorage.getItem("mytotal");
//     let rightConvert = JSON.parse(rightAdd);

//     let insert = `<div id="discount">
//     <div>
//       <input type="text" name="box" id="text" placeholder="Gift Card/Promo Code">
//     </div>
//     <div><button onclick="applyPromo()">APPLY</button></div>
//   </div>
//   <hr style="margin: 20px auto; width: 80%;">
//   <div class="tot">
//     <div>Subtotal</div>
//     <div>${rightConvert[0].amount}</div>
//   </div>
//   <hr style="margin: 20px auto; width: 80%;">
//   <div class="tot">
//     <div>Total</div>
//     <div id="tot">${rightConvert[0].amount}</div>
//   </div>`

//   let where = document.getElementById("p-right-section");
//   where.innerHTML += insert;
// }
// promoBefore()

// function applyPromo() {
//     let input = document.getElementById("text").value;
//     let totalAm = document.getElementById("tot").textContent;
//     if (input === "RAJU229591") {
//         let a = '';
//         for (let i = 1; i < totalAm.length; i++) {
//             a += totalAm[i];
//             console.log(a)
//         }
//         a = Number(a);
//         a = Math.floor((a/100)*70);
//         document.getElementById("tot").textContent = `$${a}`;

//         let getingAm = localStorage.getItem("mytotal");
//         let convertAm = JSON.parse(getingAm);
        
//         convertAm[0].amount = `$${a}`;
     
//         localStorage.setItem("mytotal", JSON.stringify(convertAm));
//     } else {
//         alert("Invalid Promo Code!");
//     }
// }
// Function to Create New User
if (localStorage.getItem("bluemercuryUser") === null) {
    localStorage.setItem("bluemercuryUser", JSON.stringify([]));
}

let gettingUser = localStorage.getItem("bluemercuryUser");
let user = JSON.parse(gettingUser);

function bluemercuryUser(event) {
    event.preventDefault();

    let email = document.getElementById("CreateAccountEmail").value;
    let fname = document.getElementById("CreateAccountFirstName").value;
    let lname = document.getElementById("Creat_LastName").value;
    let pass = document.getElementById("Creat_Password").value;

    if (email.length === 0 || fname.length === 0 || lname.length === 0 || pass.length === 0) {
        alert("Fill all the detail!");
    } else {
        if (user.length === 0) {
            

            user.push({ email: email, fname: fname, lname: lname, password: pass });

            let addData = JSON.stringify(user);
            localStorage.setItem("bluemercuryUser", addData);
        } else {
            let receiveData = localStorage.getItem("bluemercuryUser");
            let users = JSON.parse(receiveData);
            let check = 0;
            for (let i = 0; i < users.length; i++) {
                if (Object.values(users[i])[0] === email) {
                    check++;
                }
            }
            if (check > 0) {
                alert("User already exist. Please Login!");
            } else {
                user.push({ email: email, fname: fname, lname: lname, password: pass });
                let addData = JSON.stringify(user);
                localStorage.setItem("bluemercuryUser", addData);
            }
        }
    }
    document.getElementById("CreateAccountEmail").value = null;
    document.getElementById("CreateAccountFirstName").value = null;
    document.getElementById("Creat_LastName").value = null;
    document.getElementById("Creat_Password").value = null;
}

// Function for Mail Subscription in Footer


// Function for User Login
function loginUser(event) {
    event.preventDefault();

    let mail = document.getElementById("Email").value;
    let pass = document.getElementById("Password").value;

    let accessData = localStorage.getItem("bluemercuryUser");
    let user = JSON.parse(accessData);

    let count = 0;
    for (let i = 0; i < user.length; i++) {
        if (Object.values(user[i])[0] === mail && Object.values(user[i])[3] === pass) {
            count++;
        }
    }

    if (count === 1) {
        window.location.href = "index.html";
    } else {
        alert("Invalid Credentials!")
    }

    document.getElementById("Email").value = null;
    document.getElementById("Password").value = null;
}

// For Recover Passwor
// Payment Right Section



function payRight() {
    let rightAdd = localStorage.getItem("mycart");
    let rightConvert = JSON.parse(rightAdd);
    // console.log(rightConvert)

    rightConvert.forEach(function (prod) {
        let where = document.getElementById("p-right-section");

        let data = `<div class="p-grid">
        <div>
          <img src="${prod.image_link}" alt="">
          <div>
            <p>${prod.brand}</p>
            <p>${prod.name}</p>
          </div>
          <div class="get-price">$${prod.price}</div>
        </div>
      </div>
      <hr style="width: 80%; margin: auto;">`;

      where.innerHTML+= data;
    })
}
payRight();

function promoBefore() {
    let rightAdd = localStorage.getItem("bluemercuryFinalAmount");
    let rightConvert = JSON.parse(rightAdd);

    let insert = `<div id="discount">
    <div>
      <input type="text" name="box" id="text" placeholder="Gift Card/Promo Code">
    </div>
    <div><button onclick="applyPromo()">APPLY</button></div>
  </div>
  <hr style="margin: 20px auto; width: 80%;">
  <div class="tot">
    <div>Subtotal</div>
    <div>${rightConvert[0].amount}</div>
  </div>
  <hr style="margin: 20px auto; width: 80%;">
  <div class="tot">
    <div>Total</div>
    <div id="tot">${rightConvert[0].amount}</div>
  </div>`

  let where = document.getElementById("p-right-section");
  where.innerHTML += insert;
}
promoBefore()

function applyPromo() {
    let input = document.getElementById("text").value;
    let totalAm = document.getElementById("tot").textContent;
    if (input === "MASAI420") {
        let a = '';
        for (let i = 1; i < totalAm.length; i++) {
            a += totalAm[i];
        }
        a = Number(a);
        a = Math.floor((a/100)*70);
        document.getElementById("tot").textContent = `$${a}`;

        let getingAm = localStorage.getItem("bluemercuryFinalAmount");
        let convertAm = JSON.parse(getingAm);
        
        convertAm[0].amount = `$${a}`;
     
        localStorage.setItem("bluemercuryFinalAmount", JSON.stringify(convertAm));
    } else {
        alert("Invalid Promo Code!");
    }
}

// Payment PAge Form

function nextPage(event) {
    event.preventDefault();
    let email = document.getElementById("Email").value.trim();
    let fname = document.getElementById("Payment_username").value.trim();
    let lname = document.getElementById("Payment_lastname").value.trim();
     let add1 = document.getElementById("Payment_address").value.trim();



    if (email.length < 1 || fname.length < 1 || lname.length < 1 || add1.length < 1) {
        alert("Enter Valid Details!");
    } else {
        window.location.href = "payment2.html";
    }   
}

// JS for Last PAyment Page

function payMoney(event) {
    event.preventDefault();

    let cardNo = document.getElementById("cardno").value;
    let cardName = document.getElementById("cardname").value.trim();
    let exp = document.getElementById("expiry").value;
    let code = document.getElementById("code").value;

    if (cardNo.length === 16 && cardName.length > 0 && exp.length > 3 && code.length >= 4) {
        localStorage.removeItem("mycart")

        setTimeout(function () {
            alert("Paymet Successful!");
            window.location.href = "index.html";
        }, 2000);
    } else {
        alert("Invalid Details!")
    }
}
