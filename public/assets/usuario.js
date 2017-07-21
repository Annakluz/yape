const url           = 'http://localhost:3000/api/createUser';
const telefono      = localStorage.getItem("tel");
const $nombre       = $("#usuarioNombre").val();
const $email        = $("#usuarioCorreo").val();
const $contra       = $("#usuarioContrasena").val();
const $boton        = $("#crearCuenta");
const $formulario   = $("#formularioUsuario");


let cargar = () =>{
    $formulario.submit(prevent);
    crearUsuario();
    
}

let prevent = (e)=>{
    e.preventDefault();
    
   
};

let crearUsuario = ()=>{
    if($nombre.length >= 1){
     $boton.removeAttr("disabled");   
    }
    
};

let agregarUsuario=()=>{
    console.log(vamos);
}

$(document).ready(cargar);


