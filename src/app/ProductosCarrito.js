let Carrito = JSON.parse(localStorage.getItem('carrito'))
function ProductosCarrito(){
let Card = document.querySelector('main')    
let productos = Carrito
Card.innerHTML ='' 
productos.forEach(item => {
Card.innerHTML += `
<div class="d-flex">
<div class="col mb-3">
<div class="card" style="width: 18rem; margin:auto;">
<img src=${item.imagen} class="card-img-top img-fluid" alt="..." style= "height: 217px;
object-fit: cover;">
<div class="card-body ">
      <p class="card-text">${item.descripcion.substring(0,60)}..</p>
      <p>$ ${item.precio}</p>
      <div class="d-grid gap-2">
      <button  class="btn btn-dark comprar" style="display: none !important;" data-user=${item.id}>Comprar </button>
      </div>
      </div>
      </div>
      </div>
      </div>
`
});


}

export default ProductosCarrito;