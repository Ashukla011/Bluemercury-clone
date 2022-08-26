import {sidebar,sortby} from "../components/sidebar.js";



document.getElementById("sidebar").innerHTML=sidebar();
document.getElementById("right_main_select").innerHTML=sortby();

var flag = true;
  document.querySelector("#fil_one").addEventListener("click", function () {
    if (flag) {
      document.querySelector(".hide").style.display = "none";
      return (flag = false);
    } else {
      document.querySelector(".hide").style.display = "block";
      return (flag = true);
    }
  });

  var flag1 = true;
  document.querySelector("#fil_two").addEventListener("click", function () {
    if (flag1) {
      document.querySelector(".hide2").style.display = "none";
      return (flag1 = false);
    } else {
      document.querySelector(".hide2").style.display = "block";
      return (flag1 = true);
    }
  });

  let csearch = () =>{
      // var p=document.querySelector("#a").checked
      // var l=document.querySelector("#a").value

        console.log("yes")
      }
      function yes(){
        console.log("sorting function")
      }
