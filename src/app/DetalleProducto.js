import productosBD from './baseDatosProductos'
import AgregarCarrito  from './AgregarCarrito'

function DetalleProducto(Id) {
    let Carrito = []
    if (localStorage.getItem('carrito')) {
        Carrito = JSON.parse(localStorage.getItem('carrito'))
    }

    let productoId = productosBD[Id]
let datalleProducto = document.querySelector('main')
datalleProducto.innerHTML = `
<main class="mb-5">
<div class="agregarFavorito"></div>
<div class="row ">
    <div class="col-1 detalle_producto_imgs">
        <div class="row">
            <div class="col">
                <a href="#"><img class="img_detalle_producto" src=${productoId.imagenes[0]}></a>
            </div>
        </div>
        <div class="row">
            <div class="col mt-3">
                <a href="#"><img class="img_detalle_producto" src=${productoId.imagenes[1] ? productoId.imagenes[1]:'' }></a>
            </div>
        </div>
        <div class="row">
            <div class="col mt-3">
                <a href="#"><img class="img_detalle_producto" src=${productoId.imagenes[2] ? productoId.imagenes[2] :''}></a>
            </div>
        </div>
        <div class="row">
            <div class="col mt-3">
                <a href="#"><img class="img_detalle_producto" src=${productoId.imagenes[3] ? productoId.imagenes[3]: ''}></a>
            </div>
        </div>
    </div>
    <div class="col-5 img_detalle_producto_grande">
        <img class="" src=${productoId.imagen} style="max-width: 100%">
    </div>
    <div class="col-3">
        <div class="">
            <p class="titulo_prenda">${productoId.nombre}</p>
            <p class="precio_prenda">$ ${productoId.precio}</p>
            <div class="talla">
                <p>Size</p>
                <div class="row">
                    <div class="col">
                        S
                    </div>
                    <div class="col">
                        M
                    </div>
                    <div class="col">
                        L
                    </div>
                    <div class="col">
                        XL
                    </div>
                    <div class="col">
                        XXl
                    </div>
                </div>
            </div>
            <div class="btn-comprar mb-4">
                <div class="row">
                    <button type="button" id ="agregarCarrito" class="btn btn_negro">ADD TO CART</button>
                </div>
                <div class="row">
                    <button type="button" class="btn btn_azul">BUY IT NOW</button>
                </div>
            </div>
            <div class="description mb-4">
                <p>
                  ${productoId.descripcion}
                </p>
            </div>
            <div class="dimensionar">
                <a href="#">Click for Sizing</a>
            </div>
        </div>
    </div>
</div>

<div class="Carousel">
<p class="titulo_ver_mas">YOU MAY ALSO LIKE</p>
<div class="slick-list" id="slick-list">
    <button class="slick-arrow slick-prev" id="button-prev" data-button="button-prev">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left"
            class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512">
            <path fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z">
            </path>
        </svg>
    </button>
    <div class="slick-track" id="track">
        <div class="slick">
            <div class="card img_ver_mas" style="width: 18rem;">
                <img src="https://i.ibb.co/0QZYKvx/prenda4.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Fresh Stripe Sweater</h5>
                    <p class="card-text">$85.00</p>
                </div>
            </div>
        </div>
        <div class="slick">
            <div class="card img_ver_mas" style="width: 18rem;">
                <img src="https://i.ibb.co/JHXZFcq/prenda5.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Fresh Black Tie-Dye Hoodie</h5>
                    <p class="card-text">$75.00</p>
                </div>
            </div>
        </div>
        <div class="slick">
            <div class="card img_ver_mas" style="width: 18rem;">
                <img src="https://i.ibb.co/4FNzmKx/prenda6.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Pose For It Tee</h5>
                    <p class="card-text">$45.00</p>
                </div>
            </div>
        </div>
    </div>
    <button class="slick-arrow slick-next" id="button-next" data-button="button-next">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
            class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512">
            <path fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
            </path>
        </svg>
    </button>
</div>
</div>
<div class="cover">
    <img class="img-fluid" src="https://i.ibb.co/wck8mnY/cover.png">
</div>
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
let abrir = document.querySelector('#agregarCarrito')
abrir.addEventListener('click',() => {
     /**Preguntar si el elemnto esta en el carrito  */
     productoId.cantidad = 1
     let casa = Carrito.filter( (item)=> item.id == productoId.id)
     if(casa.length > 0 ){
         console.log("ya lo tienes");
     }else{
        console.log("Agregado");
        Carrito.push(productoId)
        localStorage.setItem('carrito', JSON.stringify(Carrito))
     }   
        AgregarCarrito(productoId.id)  
       document.getElementById("sideNavigation").style.width = "470px";

})

const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');


const slickWidth = slick[0].offsetWidth;


buttonPrev.onclick = () => move(1);
buttonNext.onclick = () => move(2);

function move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * - 1);
    if(leftPosition < (trackWidth - listWidth) && value == 2){
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1){
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}
 
}
export default DetalleProducto