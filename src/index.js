import validator from './validator.js';

document.getElementById("submitBtn").addEventListener("click", function(){
    let creditCardNumber = document.getElementById("card").value;
    if( validator.isValid(creditCardNumber) ) {
    document.getElementById("resultDiv").innerHTML = "Tu tarjeta " + validator.maskify(creditCardNumber) + " es válida ✓";
    document.getElementById("resultDiv").style.color = '#51a400';
  } 
    else {
    document.getElementById("resultDiv").innerHTML = validator.maskify(creditCardNumber) + " no es una tarjeta válida";
    document.getElementById("resultDiv").style.color = '#E80460';
      }
    },
    false);

console.log(validator);
