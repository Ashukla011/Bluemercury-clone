var flag = true;
// <<<<<<< HEAD
document.querySelector("#prod_rev_1").addEventListener("click", function () {
  if (flag) {
    document.querySelector(".hide").style.display = "none";
    return (flag = false);
  } else {
    document.querySelector(".hide").style.display = "block";
    return (flag = true);
  }
});
var flag1 = true;
document.querySelector("#prod_info_1").addEventListener("click", function () {
  if (flag1) {
    document.querySelector(".hide1").style.display = "none";
    return (flag1 = false);
  } else {
    document.querySelector(".hide1").style.display = "block";
    return (flag1 = true);
  }
});
var flag2 = true;
document.querySelector("#prod_info_2").addEventListener("click", function () {
  if (flag2) {
    document.querySelector(".hide2").style.display = "none";
    return (flag2 = false);
  } else {
    document.querySelector(".hide2").style.display = "block";
    return (flag2 = true);
  }
});

var flag3 = true;
document.querySelector("#prod_info_3").addEventListener("click", function () {
  if (flag3) {
    document.querySelector(".hide3").style.display = "none";
    return (flag3 = false);
  } else {
    document.querySelector(".hide3").style.display = "block";
    return (flag3 = true);
  }
});
// =======
  document.querySelector("#prod_rev_1").addEventListener("click", function () {
    if (flag) {
      document.querySelector(".hide").style.display = "none";
      return (flag = false);
    } else {
      document.querySelector(".hide").style.display = "block";
      return (flag = true);
    }
  });

  var y = JSON.parse(localStorage.getItem("news"))
var m = document.getElementById("displayProduct_top")
m.innerHTML = null 

 
      let img = document.createElement("img");
      img.src = y.image_link
      let descri = document.createElement("p");
      descri.innerText = "Brand"+" "+":"+ y.brand;
      let ti = document.createElement("p");
      ti.innerText ="Name" + " :"+ " " + y.name;
      let tt = document.createElement("p");
      tt.innerText = "Price"+":"+" "+ y.price_sign+" "+ y.price

      let div = document.createElement("div"); 
      let data = document.createElement("div");
      let container = document.createElement("div")
      container.setAttribute("id","container1")
      div.setAttribute("class","list")  
      div.append(img)
      data.append(descri,ti,tt)
      container.append(div,data)
      
      displayProduct_top.append(container)

 
// >>>>>>> master
