import {sidebar,sortby} from "../components/sidebar.js";

document.getElementById("sidebar").innerHTML=sidebar();
document.getElementById("right_main_select").innerHTML=sortby();


var flag1 = true;
document.querySelector("#prod_one").addEventListener("click", function () {
  if (flag1) {
    document.querySelector(".hide4").style.display = "none";
    return (flag1 = false);
  } else {
    document.querySelector(".hide4").style.display = "block";
    return (flag1 = true);
  }
});


var flag2 = true;
document.querySelector("#prod_two").addEventListener("click", function () {
  if (flag2) {
    document.querySelector(".hide5").style.display = "none";
    return (flag2 = false);
  } else {
    document.querySelector(".hide5").style.display = "block";
    return (flag2 = true);
  }
});


var flag3 = true;
document.querySelector("#prod_three").addEventListener("click", function () {
  if (flag3) {
    document.querySelector(".hide6").style.display = "none";
    return (flag3 = false);
  } else {
    document.querySelector(".hide6").style.display = "block";
    return (flag3 = true);
  }
});


var flag4 = true;
  document.querySelector("#fil_one").addEventListener("click", function () {
    if (flag4) {
      document.querySelector(".hide").style.display = "none";
      return (flag4 = false);
    } else {
      document.querySelector(".hide").style.display = "block";
      return (flag4 = true);
    }
  });

  var flag5 = true;
  document.querySelector("#fil_two").addEventListener("click", function () {
    if (flag5) {
      document.querySelector(".hide2").style.display = "none";
      return (flag5 = false);
    } else {
      document.querySelector(".hide2").style.display = "block";
      return (flag5 = true);
    }
  });


  //  id for adding functionality on the basis of "category"
  let powder = document.querySelector("#powder").addEventListener("click",async function () {
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&category=powder`);
        let x = await res.json();
        console.log(x)
      
        append(x)
  });


  let cream = document.querySelector("#cream").addEventListener("click",async function () {
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&category=cream`);
        let x = await res.json();
        console.log(x)
      
        append(x)
  });


  let pencil = document.querySelector("#pencil").addEventListener("click",async function () {
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&category=pencil`);
        let x = await res.json();
        console.log(x)
      
        append(x)
  });

  let liquid = document.querySelector("#liquid").addEventListener("click",async function () {
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&category=liquid`);
        let x = await res.json();
        console.log(x)
      
        append(x)
  });

// id for adding functionality on the basis of "product Type"
  let blush = document.querySelector("#blush").addEventListener("click",async function () {
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&product_type=blush`);
        let x = await res.json();
        console.log(x)
      
        append(x)
  });


  let bronzer = document.querySelector("#bronzer").addEventListener("click",async function () {
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&product_type=bronzer`);
        let x = await res.json();
        console.log(x)
      
        append(x)
  });


  let eyebrow = document.querySelector("#eyebrow").addEventListener("click",async function () {
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&product_type=eyebrow`);
        let x = await res.json();
        console.log(x)
      
        append(x)
  });

  let eyeliner = document.querySelector("#eyeliner").addEventListener("click",async function () {
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&product_type=eyeliner`);
        let x = await res.json();
        console.log(x)
      
        append(x)
  });


document.getElementById("_sort").addEventListener("click",async function(){
    var selected = document.querySelector("#_sort").value;
    console.log(selected);
    if (selected == "htl") {
      let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_sort=views&_order=desc`);
        let x = await res.json();
        console.log(x)
      append(x);

    } else if (selected == "lth") {
      let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_sort=views&_order=asc`);
        let x = await res.json();
        console.log(x)
append(x);
    }
    
  })

  window.addEventListener("load",()=>{
    getData()
  })
  let getData = async()=>{
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_start=101&_limit=50`);
    let x = await res.json();
    console.log(x)
  
    append(x)
  }
//   let cSearch = async(na)=>{
//     let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_limit=25&product_type=${na}`);
//     let x = await res.json();
//     console.log(x)
  
//     append(x)
//   }
let  append= (x) =>{
    let right_main_bottom = document.getElementById("right_main_bottom")
    right_main_bottom.innerHTML = null

    x.forEach((el) => {
        let img = document.createElement("img");
        img.src = el.image_link
        let descri = document.createElement("p");
        descri.innerText = el.brand;
        let ti = document.createElement("p");
        ti.innerText = el.name;
        let tt = document.createElement("p");
        tt.innerText =el.price_sign+" "+ el.price

        let div = document.createElement("div"); 
        div.onclick =() =>{
            saveData()
        }
        div.setAttribute("class","list")  
        div.append(img,descri,ti,tt)
        right_main_bottom.append(div )

    })
}
let saveData = () => {
    console.log("working")
}