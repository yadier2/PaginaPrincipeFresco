var nombreLogin=document.getElementById("nombreLogin");
var contrasenaLogin=document.getElementById("contrasenaLogin");
var botonEnviar= document.getElementById("enviarLogin");

var cadena= new Array();
// var indice=0;

botonEnviar.addEventListener("click",receptor);

function receptor(){
    // localStorage.getItem("indice") && 
    if (localStorage.getItem("Usuario")) {
        // indice=parseInt(localStorage.getItem("indice"));
        cadena=JSON.parse(localStorage.getItem("Usuario"));
        
        let i=0;
        var nombre=nombreLogin.value;
        var contrasena=contrasenaLogin.value;

        // cadena.forEach(element => alert(element.names==nombre));

        for (i= 0; i < cadena.length; i++) {
            if (cadena[i].names==nombre && cadena[i].pass==contrasena) {
                alert ("si existe");
            } 
        }
    }    
    
}