
var usuarioRegistro=document.getElementById("usuarioRegistro");
var correoRegistro=document.getElementById("correoRegistro");
var contrasenaRegistro=document.getElementById("contrasenaRegistro");
var nombreRegistro=document.getElementById("nombreRegistro");
var apellidoRegistro=document.getElementById("apellidoRegistro");
var cedulaRegistro=document.getElementById("cedulaRegistro");
var celularRegistro=document.getElementById("celularRegistro");
var direccionRegistro=document.getElementById("direccionRegistro");
var paisRegistro=document.getElementById("paisRegistro");
var departamentoRegistro=document.getElementById("departamentoRegistro");
var ciudadRegistro=document.getElementById("ciudadRegistro");
var codigoPostalRegistro=document.getElementById("codigoPostalRegistro");
var botonEnviar= document.getElementById("enviarRegistro");

botonEnviar.addEventListener("click",receptor);

var cadena= new Array();

function receptor(){

    var usuario={
        user:usuarioRegistro.value,
        email:correoRegistro.value,
        pass:contrasenaRegistro.value,
        name:nombreRegistro.value,
        lastName:apellidoRegistro.value,
        cedu:parseInt(cedulaRegistro.value),
        celu:parseInt(celularRegistro.value),
        dir:direccionRegistro.value,
        pais:paisRegistro.value,
        dep:departamentoRegistro.value,
        ciud:ciudadRegistro.value,
        cpost:codigoPostalRegistro.value
    }
    guardado(usuario);
}

function guardado(guardar){
    if (localStorage.getItem("Usuario")) {
        cadena=JSON.parse(localStorage.getItem("Usuario"));
        cadena.push(guardar);
    }else {
        cadena.push(guardar);
    }
    localStorage.setItem("Usuario",JSON.stringify(cadena));
}


// function vigilia(){

// }