import Registro from "./Registro";
/* let llenarDatos = {nombre:"pepe"}  */
let Usuer = []
if (localStorage.getItem('Usuario')) {
    Usuer = JSON.parse(localStorage.getItem('Usuario'))
} 
let persona = Usuer[0]
let carrito = []
if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

function Checkout() {

    document.querySelector('main').innerHTML =    

`
<main class="content px-2">
<form class="row g-3" id=formChekout>
    <div class="row px-5 pt-5 mb-5">
        <div class="col-md-4 colum_check b mt-4">
            <p class="billing">Billing information</p>
            <div>
                <p class="subtitle">Login and Guest (or) Register</h2>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                        value="option1" checked>
                    <label class="form-check-label" for="inlineRadio1">Guest</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                        value="option2">
                    <label class="form-check-label" for="inlineRadio2">Register</label>
                </div>
            </div>
            <div class="col-md-6">
                <label for="usuarioRegistro" class="form-label">User *</label>
                <input type="text" class="form-control" id="usuarioRegistro" required>
            </div>
            <div class="col-md-6">
                <label for="contrasenaRegistro" class="form-label">Password *</label>
                <input type="text" class="form-control" id="contrasenaRegistro" required>
            </div>
            <div class="col-md-6">
                <label for="nombreRegistro" class="form-label">Name *</label>
                <input type="text" class="form-control" id="nombreRegistro" required>
            </div>
            <div class="col-md-6">
                <label for="apellidoRegistro" class="form-label">Last Name *</label>
                <input type="text" class="form-control" id="apellidoRegistro" required>
            </div>
            <div class="col-12">
                <label for="correoRegistro" class="form-label">Email Address *</label>
                <input type="email" class="form-control" id="correoRegistro" required>
            </div>
            <div class="col-12">
                <label for="direccionRegistro" class="form-label">Address *</label>
                <input type="text" class="form-control" id="direccionRegistro" required>
            </div>
            <div class="col-md-6">
                <label for="ciudadRegistro" class="form-label">City *</label>
                <input type="text" class="form-control" id="ciudadRegistro" required>
            </div>
            <div class="col-md-6">
                <label for="departamentoRegistro" class="form-label">State / Providence *</label>
                <input type="text" class="form-control" id="departamentoRegistro" required>
            </div>
            <div class="col-md-6">
                <label for="codigoPostalRegistro" class="form-label">Zip / Postal Code *</label>
                <input type="text" class="form-control" id="codigoPostalRegistro" required>
            </div>
            <div class="col-md-6">
                <label for="paisRegistro" class="form-label">Country *</label>
                <input type="text" class="form-control" id="paisRegistro" required>
            </div>
            <div class="col-md-6">
                <label for="celularRegistro" class="form-label">Telephone *</label>
                <input type="number" class="form-control" id="celularRegistro" required>
            </div>
            <div class="col-md-6">
                <label for="cedulaRegistro" class="form-label">Cedula *</label>
                <input type="text" class="form-control" id="cedulaRegistro" required>
            </div>
        </div>
        <div class="col-md-4 colum_check p mt-4">
            <p class="payment">Payment methods</p>
            <div class="row g-3">
                <p class="subtitle">Accepted Cards</p>
                <div class="icon-container">
                    <i class="fa fa-cc-visa" style="color:navy;"></i>
                    <i class="fa fa-cc-amex" style="color:blue;"></i>
                    <i class="fa fa-cc-mastercard" style="color:red;"></i>
                    <i class="fa fa-cc-discover" style="color:orange;"></i>
                </div>
                <div class="col-md-6">
                    <label for="inputCName" class="form-label">Name on Card *</label>
                    <input type="text" class="form-control" id="inputCName" required
                        placeholder="John More Doe">
                </div>
                <div class="col-md-6">
                    <label for="inputCCNum" class="form-label">Credit card number *</label>
                    <input type="text" class="form-control" id="inputCCNum" required
                        placeholder="1111-2222-3333-4444">
                </div>
                <div class="col-md-6">
                    <label for="inputExpMonth" class="form-label">Exp Month *</label>
                    <input type="text" class="form-control" id="inputExpMonth" required placeholder="September">
                </div>
                <div class="col-md-6">
                    <label for="inputExpYear" class="form-label">Exp Year *</label>
                    <input type="number" class="form-control" id="inputExpYear" required placeholder="2018">
                </div>
                <div class="col-md-6">
                    <label for="inputCCV" class="form-label">CCV *</label>
                    <input type="number" class="form-control" id="inputCCV" required placeholder="352">
                </div>
            </div>
        </div>
        <div class="col-md-4 mt-4 o">
            <p class="order">Order review</p>
            <div class="row g-3">
                <table class="table"  id="producto_checkout">
                    <thead class="tbl_title">
                        <tr>
                            <th scope="col">Producto Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                    <tr id="total" >
                       
                    </tr>
                </table>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                            I acept the Terms and Conditions
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button id="enviarRegistro" type="submit" class="btn btn-primary">Realizar compra</button>
                </div>
            </div>
        </div>
    </div>
</form>
</main>
<footer>
<div class="footer px-3">
    <div class="logo-1 mt-5 pt-5 mx-5">
        <img src="https://i.ibb.co/vxR3WJK/logo-fresh.png">
    </div>
    <div class="row redes_sociales mt-5 ps-5">
        <div class="col-6">
            <img src="https://i.ibb.co/pnWQ0mW/Group-2.png">
        </div>
        <div class="col-1">
            <img src="https://i.ibb.co/CHDcBTm/Group-3.png">
        </div>
    </div>
</div>
</footer>
`
carrito.forEach(prod => {


 document.querySelector("#producto_checkout tbody").innerHTML += `
 <tr>
     <td>${prod.nombre}</td>
     <td>${prod.precio}</td>
     <td>${prod.cantidad}</td>
     <td>${prod.precio * prod.cantidad}</td>
 </tr>`
});
document.querySelector("#producto_checkout #total").innerHTML += `
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col">Grand Total</th>
    <th scope="col">${prod.precio * prod.cantidad}</th>` 

 if (Usuer.length > 0) {
   
    document.querySelector("#usuarioRegistro").value = persona.user

    document.querySelector("#contrasenaRegistro").value = persona.pass

    document.querySelector("#nombreRegistro").value = persona.name

    document.querySelector("#apellidoRegistro").value = persona.lastName

    document.querySelector("#correoRegistro").value = persona.email

    document.querySelector("#direccionRegistro").value = persona.dir

    document.querySelector("#ciudadRegistro").value = persona.ciud

    document.querySelector("#departamentoRegistro").value = persona.dep

    document.querySelector("#codigoPostalRegistro").value = persona.cpost

    document.querySelector("#paisRegistro").value = persona.pais

    document.querySelector("#celularRegistro").value = persona.celu

    document.querySelector("#cedulaRegistro").value = persona.cedu
} 
let estado = persona? true: false
estado ?document.querySelector('#inlineRadio2').checked =false : 
document.querySelector('#inlineRadio2').checked =true
Registro()




}
export default Checkout;