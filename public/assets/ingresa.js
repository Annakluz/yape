const url       = "http://localhost:3000/api/resendCode";
const codigo    = localStorage.getItem("codigo"); //para traer la info del arreglo anterior.
const telefono  = localStorage.getItem("tel");
const $valCod    = $("#formularioCodigo");

let cargar = () =>{
    $valCod.submit(validar);
    $("#confirmacionTel").html(telefono);
    alert(localStorage.codigo);
}

let validar =(e) => {
    e.preventDefault();
    let codigoUsuario = $("#codigoUsuario").val();
    let codigoReal  = codigo;
    //console.log(codigo);
    if(codigoUsuario == codigoReal){
        location.href = "usuario.html"
    };
   
};

$(document).ready(cargar);