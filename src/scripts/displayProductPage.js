var flag = true;
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
