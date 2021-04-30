
import ProductosCarrito from './ProductosCarrito'

function Navbar() {
    let Nav = document.querySelector('header')
    Nav.innerHTML =`
  
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href=""><img class="logo" src="https://i.ibb.co/vxR3WJK/logo-fresh.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link active shop" aria-current="page" href="#">SHOP</a>
            <a class="nav-link active collections" href="#">COLLECTIONS</a>
            <span class="nav-link active login" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  ><img src="https://i.ibb.co/TrswtXv/icons8-user-2.png"></span>
            <span class="active favoritos" " style="margin-top: 10px !important;" ><img src="https://i.ibb.co/fq5fN7j/icons8-user-3.png"></span> 
            </div>
    </div>
</div>
</nav>`

document.querySelector('.login').addEventListener( 'click',()=> {
    

}) 

 document.querySelector('.favoritos').addEventListener( 'click',()=> {
    ProductosCarrito()
})  

}

export default Navbar;