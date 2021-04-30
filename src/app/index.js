import '../styles/detalle_producto.css'
import '../styles/carrito.css'
import '../styles/header_footer.css'
import '../styles/checkout.css'

import Comentario from './comentario'
import Navbar from './Navbar'
import CardProducts from './CardProducts'


import DetalleProducto from './DetalleProducto'
import Login from './Login'
/* let miComentario = new Comentario */
 Login()  
Navbar()  
CardProducts()   
 document.querySelector('.containerProducts').addEventListener('click', (e) => {
     if (e.target.className == 'btn btn-dark comprar') {
         let id= e.target.dataset.user
        DetalleProducto(id)     
    }
}) 

