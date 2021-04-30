var usuarioLogin=document.getElementById("usuarioLogin");
var contrasenaLogin=document.getElementById("contrasenaLogin");
var botonEnviar= document.getElementById("enviarLogin");

var cadena= new Array();

botonEnviar.addEventListener("click",receptor);

function receptor(){
    if (localStorage.getItem("Usuario")) {
        cadena=JSON.parse(localStorage.getItem("Usuario"));
        
        let i=0;
        var indice=0;
        var usuario=usuarioLogin.value;
        var contrasena=contrasenaLogin.value;

        // cadena.forEach(element => alert(element.user==usuario));

        for (i= 0; i < cadena.length; i++) {
            if (cadena[i].user!=usuario && cadena[i].pass!=contrasena) {
            }else{
                indice=i;
            }
        }

        if (cadena[indice].user==usuario && cadena[indice].pass==contrasena) {

            var persona={
                user:cadena[indice].user,
                pass:cadena[indice].pass,
                email:cadena[indice].email,
                name:cadena[indice].name,
                lastName:cadena[indice].lastName,
                cedu:cadena[indice].cedu,
                celu:cadena[indice].celu,
                dir:cadena[indice].dir,
                pais:cadena[indice].pais,
                dep:cadena[indice].dep,
                ciud:cadena[indice].ciud,
                cpost:cadena[indice].cpost
            }

            alert("usuario registrado: "+persona.user+" - "+persona.email+" - "+persona.pass);
        }else{
            alert("el usuario no se encuentra registrado");
        }
    }else {
        alert("el usuario no se encuentra registrado");
      }      
}