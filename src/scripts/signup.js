// Posting the user data in database
let daba=document.getElementById("form").addEventListener("click",function(){
  checkSignup()
})

async function checkSignup() {
    event.preventDefault();
  
    let email = document.getElementById("email").value;
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let password = document.getElementById("password").value;
  
    const data = {
      email: email,
      first_name: first_name,
       last_name:last_name,
      password: password,
    };
  
    let userData = await fetch("https://fierce-everglades-78490.herokuapp.com/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 403) {
          alert("User already exists, please login");
          window.location.href = "./index.html";
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
    if (userData !== undefined) {
      window.alert("Sign up successful, please login");
      window.location.href = "./index.html";
    }
  }
  
  

  