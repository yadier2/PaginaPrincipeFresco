var nombreRegistro=document.getElementById("nombreRegistro");
var correoRegistro=document.getElementById("correoRegistro");
var contrasenaRegistro=document.getElementById("contrasenaRegistro");
var botonEnviar= document.getElementById("enviarRegistro");

botonEnviar.addEventListener("click",receptor);

var cadena= new Array();
var indice=0;

function receptor(){

    let nombre=nombreRegistro.value;
    let correo=correoRegistro.value;
    let contrasena=contrasenaRegistro.value;

    // var usuario=[
    //     nombre,
    //     correo,
    //     contrasena
    // ];

    var usuario={
        names:nombre,
        email:correo,
        pass:contrasena
    }

    guardado(usuario);
}

function guardado(guardar){
    // localStorage.getItem("indice") && 
    if (localStorage.getItem("Usuario")) {
        // indice=parseInt(localStorage.getItem("indice"));
        cadena=JSON.parse(localStorage.getItem("Usuario"));
        cadena.push(guardar);
    }else {
        cadena.push(guardar);
    }

    // localStorage.setItem("indice",indice);
    localStorage.setItem("Usuario",JSON.stringify(cadena));

    // indice=parseInt(localStorage.getItem("indice"));
    // indice=indice+1;
    // localStorage.setItem("indice",indice);
}