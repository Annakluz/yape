const url           = "http://localhost:3000/api/registerNumber"; 
const $form         = $("#form");
const $telefono     =$("#telefono");
const $check        =$("#test5");
const $registrarse  =$("#registroContinuar");



let cargar = () =>{
    $form.submit(preven); //llama a la funcion que evita recargar la pagina .
    $telefono.keyup(validar);
    $check.click(validar);
    $registrarse.click(generaCodigo); //llama a la funcion que genera el codigo usuario.

    
}//arrow function

let preven =(e) => {
    e.preventDefault;
   
}

let validar =()=> {
    
    if ($telefono.val().length == 10 && $check.is(':checked')=== true ){
        $registrarse.removeAttr("disabled");
    }
    
    
}

let generaCodigo = ()=>{
    $.post(url, {'phone': $telefono.val(), 'terms': true },function(res){
        console.log(res);
        localStorage.setItem("tel", res.data.phone);
        localStorage.setItem("codigo", res.data.code);
    });
} 


/*{
    $.post( url , { 'phone': $telefono.val() , 'terms':true }, function (res){
        localStorage.setItem("tel", res.data.phone );
        console.log(localStorage.getItem("tel")
    };
});*/

$(document).ready(cargar);


/*let $numeroDigitos = $telefono.length;
    
    if ($numeroDigitos.lenght == 10 ) {
       $registrarse.removeAttr("disabled"); 
    }
    else{
        alert("Número Incorrecto");
    }
*/
