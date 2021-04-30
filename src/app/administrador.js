var cadena= new Array();
var indice=0;

impresion();

function agregarBoton(){
  var botonBorrar= document.getElementById("BorrarDatos");
  botonBorrar.addEventListener("click",borrarTodo);
}

function impresion(){

  if (localStorage.getItem("cadena")) {
    indice=parseInt(localStorage.getItem("indice"));
    cadena=JSON.parse(localStorage.getItem("cadena"));
    //alert("esta en el if (existe): "+cadena);

    var admi=0;
    var aseo=0;
    var gimnasio=0;
    var total=0;

    var i=0;
    var texto1;
    var texto2='<main class="imprimirContenedor" id="imprimirContenedor_'+i+'"><section class="imprimirFormato" id="imprimirFormato_'+i+'">';

    texto1=texto2;

    for (i = 0; i < indice; i++) {

      if (i!=0) {
        texto2='<main class="imprimirContenedor" id="imprimirContenedor_'+i+'"><section class="imprimirFormato" id="imprimirFormato_'+i+'">';
        texto1=texto1+texto2;
      }

      admi=admi+parseInt(cadena[i][2]);
      aseo=aseo+parseInt(cadena[i][3]);
      gimnasio=gimnasio+parseInt(cadena[i][4]);
      total=total+parseInt(cadena[i][5]);

      var texto3='<label for="imprimirNumeroPredio" class="imprimirNumeroPredio"><span class="izquierda">Señores Apartamento #</span><span class="derecha">'+cadena[i][0]+'</span></label><label for="imprimirMes" class="imprimirMes"><span class="izquierda">Cuota mes: </span><span class="derecha">'+cadena[i][1]+'</span></label><br><br><br><label for="imprimirAdministracion" class="imprimirAdministracion"><span>Valor Administracion</span><span class="derecha">$ '+cadena[i][2]+'</span></label><br><br><label for="imprimirAseo" class="imprimirAseo"><span>Valor Cuota de aseo</span><span class="derecha">$ '+cadena[i][3]+'</span></label><br><br><label for="imprimirGimnasio" class="imprimirGimnasio"><span>Derechos de Gimnasio</span><span class="derecha">$ '+cadena[i][4]+'</span></label><br><br><br><label for="imprimirTotal" class="imprimirTotal"><span>Total a Pagar</span><span class="derecha">$ '+cadena[i][5]+'</span></label>';
      texto1=texto1+texto3;

      var texto4='</section></main>';
      texto1=texto1+texto4;

    }
    var texto5='<main class="imprimirContenedorTotal" id="imprimirContenedorTotal"><section class="imprimirFormatoTotal" id="imprimirFormatoTotal"><label for="anumcioTotal" class="anumcioTotal"><span class="izquierda">Valor Total del Conjunto</span></label><br><br><br><label for="imprimirAdministracion" class="imprimirAdministracion"><span>Valor Administracion</span><span class="derecha">$ '+admi+'</span></label><br><br><label for="imprimirAseo" class="imprimirAseo"><span>Valor Cuota de aseo</span><span class="derecha">$ '+aseo+'</span></label><br><br><label for="imprimirGimnasio" class="imprimirGimnasio"><span>Derechos de Gimnasio</span><span class="derecha">$ '+gimnasio+'</span></label><br><br><br><label for="imprimirTotal" class="imprimirTotal"><span>Total a Pagar</span><span class="derecha">$ '+total+'</span><br><br><input type="submit" id="BorrarDatos" class="BorrarDatos" value="Borrar Datos"></label></section></main>';

    texto1=texto1+texto5;

    var input=document.getElementById("global");
    input.innerHTML=texto1;

    agregarBoton();

  }else if (localStorage.getItem("borrador")) {
    alert("Informacion borrada");
    localStorage.removeItem("borrador");
  }else {
    alert("No hay informacion que mostrar");
  }
}

function borrarTodo(){
  var borrador=1;

  if (localStorage.getItem("indice") && localStorage.getItem("cadena")) {
    localStorage.removeItem("indice");
    localStorage.removeItem("cadena");
    localStorage.setItem("borrador",borrador);
    location.reload();
  }else {
    alert("No hay informacion que borrar");
  }
}