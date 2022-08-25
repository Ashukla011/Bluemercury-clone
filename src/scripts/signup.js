
  

var form = document.querySelector('form');
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var data = {
  
   
    email:form.email.value,
    first_name:form.first_name.value,
    last_name:form.last_name.value,
    password:form.password.value,

  }
  console.log(data)
  localStorage.setItem("userdata", JSON.stringify(data))
  window.location.href = "./login.html"
})
