const validator = {
  
  isValid(creditCardNumber) {
  
  
    var arr = []; //usamos array para almacenar los dígitos del input
    
    for (let i = 0; i < creditCardNumber.length; i++) { //for loop para iterar a través de cada dígito de creditCardNumber
  
    if (i % 2 == 0) { //en el contexto del array el index es par o impar, usando el operador módulo
    
    if (creditCardNumber[i]*2 < 10) { //si un dígito multiplicado por dos es menor que 10, 
    arr.push(creditCardNumber[i]*2); //lo añadimos al array
    
    } else {
    arr.push(creditCardNumber[i]*2-9); //si es mayor o igual que 10, le sustraemos 9, y lo añadimos al array
    }
    
    } else { //después del if else se añaden los dígitos impares
    arr.push(parseInt(creditCardNumber[i],10)) //con parseInt para asegurarnos de que sea un num entero
    }
    }
  
    return arr.reduce( (prv, cur) => prv + cur) % 10 === 0; //con reduce podemos sumar el array entero y comprobar con operador modulo si es multiplo de 10
    },
  
  
  
  
    //Para enmascarar creditCardNumber
    maskify(creditCardNumber) {
    var lastFour = "";
    lastFour = creditCardNumber.slice(-4);
    var maskedNumbers = "";
    
    for(var i = (creditCardNumber.length)-4; i>0; i--){
    maskedNumbers += "#";
    }
    
    creditCardNumber = maskedNumbers+lastFour;
  
    return creditCardNumber
  
  }
};

export default validator;
