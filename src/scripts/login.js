

var form=document.querySelector("form")
var userdata=JSON.parse(localStorage.getItem("userdata"))   // local stoage se data utha lia 
form.addEventListener("submit",function (event){
    event.preventDefault();
    var data={
        email:form.email.value,
        password:form.password.value
    }
if(userdata==null){
alert("Please create an account")
}else if(userdata.email==data.email && userdata.password==data.password){
      alert("Login is successful")
      localStorage.setItem("login",JSON.stringify(userdata))
       window.location.href="./signup.html"
    }else{
        alert("user does not exist")
    }

})