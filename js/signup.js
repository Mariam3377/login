

let idName = document.getElementById('idName')
let idPasword = document.getElementById('idPasword')
let idEmail = document.getElementById('idEmail')

  let arr = []
  if(localStorage.getItem('sign')!= null){
    arr = JSON.parse(localStorage.getItem('sign'))
  }

  



function add(){
if(idEmail.value == "" ||idName.value == "" ||idPasword.value == "" ){
 document.getElementById('message').innerHTML =`<p class="text-center text-danger pt-2">Not Succed</p>`
}else{
  document.getElementById('message').innerHTML =`<p class="text-center text-info pt-2"> Succed</p>`
 window.location.href="index.html"


    let obj ={
        user:idName.value,
        pasword:idPasword.value,
        Email:idEmail.value,
    }
    arr.push(obj)
    localStorage.setItem( "sign" ,JSON.stringify(arr))
}
clear()
}
function clear(){
  idEmail.value ='';
  idName.value ='';
  idPasword.value ='';

}
console.log(arr);
