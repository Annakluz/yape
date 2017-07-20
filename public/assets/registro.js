const url           = "http://localhost:3000/api/registerNumber"; 
const $form         = $("#form");
const $registrarse  =$("#registroContinuar");
const $telefono     =$("#telefono");
const $check        =$("#check");



let cargar = () =>{
    $form.submit(preven); //llama a la funcion que evita recargar la pagina .
    
    $check.click()
   
}//arrow function

let preven =(e) => {
    e.preventDefault;
   
}

let valido =()=> {
    
    let numeroDigitos = $telefono.keyup();
    
    if (numeroDigitos.lenght == 10 && $registrarse.is(":checked") == true) {
       $registrarse.removeAttr("disabled"); 
    }
    else{
        alert("Número Incorrecto");
    }
}

$(document).ready(cargar);


