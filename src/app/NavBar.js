function Navbar() {
    let Nav = document.querySelector('header')
    Nav.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#"><img class="logo" src="../imgs/logo-fresh.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link active shop" aria-current="page" href="#">SHOP</a>
            <a class="nav-link active" href="#">COLLECTIONS</a>
            <a class="nav-link active login" href="#"><img src="imgs/icons8-user 2.png"></a>
            <a class="nav-link active carrito" href="#"><img src="imgs/icons8-user 3.png"></a>
        </div>
    </div>
</div>
</nav>`

}

export default Navbar;