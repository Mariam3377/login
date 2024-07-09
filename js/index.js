let loginPasword = document.getElementById('loginPas')
let loginEmail = document.getElementById('loginEmail')
let h1 = document.getElementById('h1')
let arr =[]
 if(localStorage.getItem('sign')!= null)
 {
 arr = JSON.parse(localStorage.getItem('sign'))
 }
  function login(){
   if(check() == true){
 window.location.href="home.html"
 localStorage.setItem('user',arr[index].user)
   }else{
    document.getElementById("alert").innerHTML = `<p class="text-center text-danger pt-2"> NOT correct</p>`
   }
  }

  function check(){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].Email==loginEmail.value && arr[index]. pasword==loginPasword.value){
           
            return true
        }
        
    }
  }
  if(localStorage.getItem('user')!= null)
    {
        document.getElementById('h1').innerHTML =`<h1>welcom ${localStorage.getItem("user")}</h1>`
        }

