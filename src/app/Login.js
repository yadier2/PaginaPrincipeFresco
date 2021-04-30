function Login() {
let login = document.querySelector('.inicioLogin')
login.innerHTML = 
`
<!-- prueba -->

        <div>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="display: none;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <!--  -->
                            <div class="contenedorLogin" id="contenedorLogin">  
                                <section class="sesionUsuario">
                                    <form name="usuarioLogin" class="usuarioLogin">
                                        <div class="mb-3">
                                            <label for="usuarioLogin" class="form-label usuarioLogin">Nombre </label>
                                            <input type="text" class="form-control cajaUsuarioLogin" id="usuarioLogin" aria-describedby="emailHelp" placeholder="Ingrese su nombre de Usuario" required="">
                                        </div>

                                        <div class="mb-3">
                                            <label for="contrasenaLogin" class="form-label contrasenaLogin">Contraseña</label>
                                            <input type="password" class="form-control cajaContrasenaLogin" id="contrasenaLogin" aria-describedby="emailHelp" placeholder="Ingrese su contraseña de Usuario" required="">
                                        </div>

                                        <div class="d-grid gap-2">
                                            <input type="submit" id="enviarLogin" class="botonEnviarLogin btn btn-primary" data-bs-dismiss="modal">
                                        </div>
                                    </form>
                                </section>
                            </div>
                            <!--  -->
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- fin prueba -->
`
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
                cpost:cadena[indice].cpost,
            }
    
                    /* llamar funcion */
            alert("usuario registrado: "+ persona.user);
        }else{
            alert("el usuario no se encuentra registrado");
        }
    }else {
        alert("el usuario no se encuentra registrado");
      }      
}
}
export default Login