import productosBD from './baseDatosProductos'
import Checkout from './Chekout'
let Carrito = []
let valueCantidad = null
if (localStorage.getItem('carrito')) {
    Carrito = JSON.parse(localStorage.getItem('carrito'))
}
function AgregarCarrito(Id) {
    let product = productosBD[Id]
    document.querySelector('.agregarFavorito').innerHTML = `
    <div id="sideNavigation" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" id="cerrar" >&times;</a>
        <div class="contenido">
            <div class="row producto">
                <div class="col-7  detalle_producto_carrito">
                    <div class="row">
                        <div class="col-6">
                            <img class="producto_carrito" src= ${product.imagen}
                            >
                        </div>
                        <div class="col-6">
                            <p class="titulo_producto">${product.nombre}</p>
                            <p class="precio_producto">$ ${product.precio}</p>
                        </div>
                    </div>
                </div>
                <div class="col-4 cantidad">
                    <input type="number" id="cantidad" value="1"  min="1" class="form-control form-cantidad" >
                    <button type="button" class="btn remove">Remove</button>
                </div>
            </div>
            <div class="row total_a_pagar">
                <div class="col subtotal">
                    <p>SubTotal</p>
                </div>
                <div class="col precio_total">
                    <p id="precioTotal">$ ${product.precio}</p>
                </div>
            </div>
            <div class="row">
                <div class="info1">
                    <p>Shipping, taxes, and discount codes calculated at checkout.</p>
                </div>
            </div>
            <div class="row">
                <button id="verificar" type="button" class="btn button_secundary">CHECK OUT</button>
            </div>
            <div class="row">
                <div class="info2">
                    <p>Please Note: All items are pre-order and will ship in 6-10 weeks. Guaranteed holiday delivery.
                    </p>
                </div>
            </div>
        </div>
    </div>
    `

    valueCantidad = document.querySelector('#cantidad')
    valueCantidad.addEventListener('change', () => {
        let subtotal = document.querySelector('#precioTotal').innerHTML = product.precio * valueCantidad.value
    })

    let cerrar = document.querySelector('#cerrar')
    cerrar.addEventListener('click', () => {
        document.getElementById("sideNavigation").style.width = "0";

    })
    console.log(Carrito)
    let verificar = document.querySelector('#verificar')
    verificar.addEventListener('click', () => {
        let inde = 0
        Carrito.forEach((item, index) => {
            if (item.id == Id) {
                inde = index
                console.log(inde, index, Id)
            }
            
        });
       
        Carrito[inde].cantidad = parseInt(valueCantidad.value);
        localStorage.setItem('carrito', JSON.stringify(Carrito))

        Checkout()
    })
}
export default AgregarCarrito