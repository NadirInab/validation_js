const form1 = document.getElementById("form") ;
const userName = document.getElementById("userName") ;
const email = document.getElementById("email") ;
const password = document.getElementById("password") ;
const confirmedPassword = document.getElementById("confirmedPassword") ;


var btn = document.getElementById('btn') ;
var a = 0 ;

// console.log(btn) ;

btn.addEventListener('mouseover', ()=>{
    if((email.value == "" && userName.value == "") && a == 0){
       moveRight();
        a= 1 ;
    }
    if((email.value == "" && userName.value == "") && a == 1){
        moveLeft() ;
        a= 2
    }
    if((email.value == "" && userName.value == "") && a == 2){
        moveTop();
    }
    if((email.value !== "" && userName.value !== "") ){
        btn.style.cursor = "pointer "; 
    }
    
})

function moveRight(){
    btn.style.transform = "translateX(160%)" ;
}
function moveLeft(){
    btn.style.transform = "translateX(-50%)" ;
}
function moveTop(){
    btn.style.transform = "translateY(50%)" ;
}






function showEroor(input, message){
    const formControl = input.parentElement ;
    formControl.className = "form-control error" ;
    const small = formControl.querySelector("small") ;
    small.className = "form-control error" ;
    small.innerText = message ;
}

function showSuccess(input){
    const formControl = input.parentElement ;
    formControl.className = "form-control success" ;
   
}

function isValidEmail(email){
    const regex = new  RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/") ;
    return regex.test(email.value)
}   



form1.addEventListener("submit",(e)=>{
    e.preventDefault() ;

    if(userName.value == ""){
        showEroor(userName, "userName is required!!") ;
    }else{
        showSuccess(userName) ;
    }  

    if(email.value == ""){
        showEroor(email, "email is required!!") ;
    }
    else if(!isValidEmail(email.value)){
        showEroor(email,"Email is not valid") ;
    }
     else{
        showSuccess(email) ;
    }

})