const url           = "http://localhost:3000/api/registerNumber"; 
const $form         = $("#form");
const $telefono     =$("#telefono");
const $check        =$("#test5");
const $registrarse  =$("#registroContinuar");



let cargar = () =>{
    $form.submit(preven); //llama a la funcion que evita recargar la pagina .
    $telefono.keyup(validar);
    $check.click(validar);

    
}//arrow function

let preven =(e) => {
    e.preventDefault;
   
}

let validar =()=> {
    
    if ($telefono.val().length == 10 && $check.is(':checked')=== true ){
        $registrarse.removeAttr("disabled");
    }
    
    
}

$(document).ready(cargar);


/*let $numeroDigitos = $telefono.length;
    
    if ($numeroDigitos.lenght == 10 ) {
       $registrarse.removeAttr("disabled"); 
    }
    else{
        alert("Número Incorrecto");
    }
*/
