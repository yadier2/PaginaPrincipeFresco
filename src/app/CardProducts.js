function CardProducts(){
let Card = document.querySelector('.containerProducts')   
let productos = [
    {descripcion:'Enterizo de mujer, silueta amplia, cuello en v de tiras con escote en los laterales negro m..', precio:'29.900', name:'' ,id:1},
    {descripcion:'Enterizo de mujer, silueta amplia, cuello en v de tiras con escote en los laterales negro m..', precio:'29.900', name:'',id:2},
    {descripcion:'Enterizo de mujer, silueta amplia, cuello en v de tiras con escote en los laterales negro m..', precio:'29.900', name:'' ,id:3 },
    {descripcion:'Enterizo de mujer, silueta amplia, cuello en v de tiras con escote en los laterales negro m..', precio:'29.900', name:'' ,id:4},
    {descripcion:'Enterizo de mujer, silueta amplia, cuello en v de tiras con escote en los laterales negro m..', precio:'29.900', name:'' ,id:5},
    {descripcion:'Enterizo de mujer, silueta amplia, cuello en v de tiras con escote en los laterales negro m..', precio:'29.900', name:'' ,id:6},
]
Card.innerHTML ='' 
productos.forEach(item => {
Card.innerHTML += `
<div class="col mb-3">
<div class="card" style="width: 18rem; margin:auto;">
<img src="https://images.unsplash.com/photo-1619703600780-6e88886b54b0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top img-fluid" alt="..." style= "height: 217px;
object-fit: cover;">
<div class="card-body ">
      <p class="card-text">${item.description}</p>
      <p>$ ${item.precio}</p>
      <div class="d-grid gap-2">
      <button class="btn btn-dark comprar">Comprar </button>
      </div>
      </div>
      </div>
      </div>
`
});

}

export default CardProducts;