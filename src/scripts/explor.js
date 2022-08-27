
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
// top
document.getElementById("A-slideshow-11").addEventListener("click",function(){
  plusSlidest(-1)
})
document .getElementById("A-slideshow-12").addEventListener("click",function(){
  plusSlidest(1)
})

 document.getElementById("A-span-11").addEventListener("click",function(){
currentSlidet(1)
})
 document.getElementById("A-span-12").addEventListener("click",function(){
currentSlidet(2)
})
let slideIndext = 1;
showSlidest(slideIndext);

function plusSlidest(n) {
  showSlidest(slideIndext += n);
}

function currentSlidet(n) {
  showSlidest(slideIndext = n);
}

function showSlidest(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-1");
  let dots = document.getElementsByClassName("dot-1");
  if (n > slides.length) {slideIndext = 1}    
  if (n < 1) {slideIndext = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndext-1].style.display = "block";  
  dots[slideIndext-1].className += " active";
}

////////////////////////////////////
// second
document.getElementById("A-slideshow-21").addEventListener("click",function(){
  plusSlides(-1)
})
document .getElementById("A-slideshow-22").addEventListener("click",function(){
  plusSlides(1)
})

 document.getElementById("A-span-21").addEventListener("click",function(){
currentSlide(1)
})
 document.getElementById("A-span-22").addEventListener("click",function(){
currentSlide(2)
})
 document.getElementById("A-span-23").addEventListener("click",function(){
currentSlide(3)
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// thaird

document.getElementById("A-slideshow-31").addEventListener("click",function(){
  plusSlides2(-1)
})
document .getElementById("A-slideshow-32").addEventListener("click",function(){
  plusSlides2(1)
})

 document.getElementById("A-span-31").addEventListener("click",function(){
currentSlide2(1)
})
 document.getElementById("A-span-32").addEventListener("click",function(){
currentSlide2(2)
})
 document.getElementById("A-span-33").addEventListener("click",function(){
currentSlide2(3)
})
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
}

//  4th slider

document.getElementById("A-slideshow-31").addEventListener("click",function(){
  plusSlides3(-1)
})
document .getElementById("A-slideshow-42").addEventListener("click",function(){
  plusSlides3(1)
})

 document.getElementById("A-span-41").addEventListener("click",function(){
currentSlide3(1)
})
 document.getElementById("A-span-42").addEventListener("click",function(){
currentSlide3(2)
})
 document.getElementById("A-span-43").addEventListener("click",function(){
currentSlide3(3)
})

let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  let dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";  
  dots[slideIndex3-1].className += " active";
}

//  5th slider

document.getElementById("A-slideshow-51").addEventListener("click",function(){
  plusSlides4(-1)
})
document .getElementById("A-slideshow-52").addEventListener("click",function(){
  plusSlides4(1)
})

 document.getElementById("A-span-51").addEventListener("click",function(){
currentSlide4(1)
})
 document.getElementById("A-span-52").addEventListener("click",function(){
currentSlide4(2)
})
//  document.getElementById("A-span-43").addEventListener("click",function(){
// currentSlide4(3)
// })

let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides4");
  let dots = document.getElementsByClassName("dot4");
  if (n > slides.length) {slideIndex4 = 1}    
  if (n < 1) {slideIndex4 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex4-1].style.display = "block";  
  dots[slideIndex4-1].className += " active";
}