import {sidebar,sortby} from "./components/sidebar.js";



document.getElementById("sidebar").innerHTML=sidebar();
document.getElementById("right_main_select").innerHTML=sortby();

var flag = true;
  document.querySelector("#dress1").addEventListener("click", function () {
    if (flag) {
      document.querySelector(".hide").style.display = "none";
      return (flag = false);
    } else {
      document.querySelector(".hide").style.display = "block";
      return (flag = true);
    }
  });