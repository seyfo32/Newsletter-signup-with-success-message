var firstPage = document.getElementById("form");
var sucPage = document.getElementById("suc-page");
var form = document.getElementById("myform");
var mybutton = document.getElementById("mybutton");
var error=document.getElementById("error");
var input=document.getElementById("mail-input");
error.style.display="none";
sucPage.style.display="none";
firstPage.style.display = "block";
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      
  
      return true;
  
    } else {
  
     
  
      return false;
  
    }
  
  }
form.addEventListener("submit", formKontrol);
function formKontrol() {

    var input = document.getElementById("mail-input");
    var value = input.value.trim();
    function myfunction() {
            
        event.preventDefault();
        firstPage.style.display = "none";
        sucPage.style.display = "block";
        
    }
    if (value === "") {
        alert("Metin giriş alanı boş olamaz!");
        return false;
    }
     else if (ValidateEmail(input)==false ){
        event.preventDefault();
        error.style.display="block";
    }
    
    else{
        myfunction();
       }
        

    




}

mybutton.addEventListener("click", homePage);

function homePage() {
    event.preventDefault();
    firstPage.style.display = "block";
    sucPage.style.display = "none";
}
