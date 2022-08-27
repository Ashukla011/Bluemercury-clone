window.addEventListener("load",()=>{
    getData()
  })
  let getData = async()=>{
    let res = await fetch(`https://still-chamber-16033.herokuapp.com/makeup_data?_start=101&_limit=80`);
    let x = await res.json();
    // console.log(x)
  
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
        div.setAttribute("class","list1")  
        div.append(img,descri,ti,tt)
        div.addEventListener("click",function(){
            localStorage.setItem("news",JSON.stringify(el))
            window.location.href="./displayProductPage.html"
        })
        right_main_bottom.append(div )

    })
}
let saveData = () => {
    console.log("working")
}
// let cSearch = () => {
//     console.log("working ")
//    }