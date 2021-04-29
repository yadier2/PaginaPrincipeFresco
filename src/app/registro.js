var nombreRegistro=document.getElementById("nombreRegistro");
var correoRegistro=document.getElementById("correoRegistro");
var contrasenaRegistro=document.getElementById("contrasenaRegistro");
var botonEnviar= document.getElementById("enviarRegistro");

botonEnviar.addEventListener("click",receptor);

var cadena= new Array();

function receptor(){

    let nombre=nombreRegistro.value;
    let correo=correoRegistro.value;
    let contrasena=contrasenaRegistro.value;

    var usuario={
        names:nombre,
        email:correo,
        pass:contrasena
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