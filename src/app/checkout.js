var usuarioLogin = document.getElementById("usuarioRegistro");
var contrasenaLogin = document.getElementById("contrasenaRegistro");
var botonEnviar = document.getElementById("correoRegistro");

var cadena = new Array();

botonEnviar.addEventListener("click", receptor);

function receptor() {
    if (localStorage.getItem("Usuario")) {
        cadena = JSON.parse(localStorage.getItem("Usuario"));

        let i = 0;
        var indice = 0;
        var usuario = usuarioLogin.value;
        var contrasena = contrasenaLogin.value;

        // cadena.forEach(element => alert(element.user==usuario));

        for (i = 0; i < cadena.length; i++) {
            if (cadena[i].user != usuario && cadena[i].pass != contrasena) {
            } else {
                indice = i;
            }
        }

        if (cadena[indice].user == usuario && cadena[indice].pass == contrasena) {

            var persona = {
                user: cadena[indice].user,
                pass: cadena[indice].pass,
                email: cadena[indice].email,
                name: cadena[indice].name,
                lastName: cadena[indice].lastName,
                cedu: cadena[indice].cedu,
                celu: cadena[indice].celu,
                dir: cadena[indice].dir,
                pais: cadena[indice].pais,
                dep: cadena[indice].dep,
                ciud: cadena[indice].ciud,
                cpost: cadena[indice].cpost
            }

            alert("usuario registrado: " + persona.user + " - " + persona.email + " - " + persona.pass);

            document.querySelector("#usuarioRegistro").innerHTML = `
            <input type="text" class="form-control" id="usuarioRegistro" value="${persona.user}" required>`

            document.querySelector("#contrasenaRegistro").innerHTML = `
            <input type="text" class="form-control" id="contrasenaRegistro" value="${persona.pass}" required>`

            document.querySelector("#nombreRegistro").innerHTML = `
            <input type="text" class="form-control" id="nombreRegistro" value="${persona.name}" required>`

            document.querySelector("#apellidoRegistro").innerHTML = `
            <input type="text" class="form-control" id="apellidoRegistro" value="${persona.lastName}" required>`

            document.querySelector("#correoRegistro").innerHTML = `
            <input type="email" class="form-control" id="correoRegistro" value="${persona.email}" required>`

            document.querySelector("#direccionRegistro").innerHTML = `
            <input type="text" class="form-control" id="direccionRegistro" value="${persona.dir}" required>`

            document.querySelector("#ciudadRegistro").innerHTML = `
            <input type="text" class="form-control" id="ciudadRegistro" value="${persona.ciud}" required>`

            document.querySelector("#departamentoRegistro").innerHTML = `
            <input type="text" class="form-control" id="departamentoRegistro" value="${persona.dep}" required>`

            document.querySelector("#codigoPostalRegistro").innerHTML = `
            <input type="text" class="form-control" id="codigoPostalRegistro" value="${persona.cpost}" required>`

            document.querySelector("#paisRegistro").innerHTML = `
            <input type="text" class="form-control" id="paisRegistro" value="${persona.pais}" required>`

            document.querySelector("#celularRegistro").innerHTML = `
            <input type="number" class="form-control" id="celularRegistro" value="${persona.celu}" required>`

            document.querySelector("#cedulaRegistro").innerHTML = `
            <input type="text" class="form-control" id="cedulaRegistro" value="${persona.cedu}" required>`
        } else {
            alert("el usuario no se encuentra registrado");
        }
    } else {
        alert("el usuario no se encuentra registrado");
    }
}