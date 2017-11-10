
var contador = 140;

var boton = document.getElementById('btn');

boton.addEventListener('click',function(){


//obtener el texto del textarea
var comentario = document.getElementById('comment').value;
var contador = document.getElementById('btn');

document.getElementById('contador').innerHTML=140;
//Limpio la caja de texto
document.getElementById('comment').value="";
document.getElementById('comment').focus();
document.getElementById('btn').disabled=true;
document.getElementById('btn').className = 'boton-desactivado';
//obtener el contenedor donde se agregan los comentarios
var contenedor = document.getElementById('cont');

//crea un nuevo div cada vez que le doy click en el boton
// para agregar un nuevo mensaje
var nuevoComentario = document.createElement('div');

//texto lo coloco dentro de un nodo
var textNuevoComentario = document.createTextNode(comentario);

var txtFecha = document.createTextNode(new Date());

//Creo el parrafo para el texto
var contenedorElemento = document.createElement('p');



//Coloco el texto(nodo) dentro del parrafo
contenedorElemento.appendChild(textNuevoComentario);

contenedorElemento.className = 'parrafo';


//Creo el parrafo para la fecha
var contenedorFecha = document.createElement('p');

//Coloco la fecha dentro del parrafo
contenedorFecha.appendChild(txtFecha);
contenedorFecha.className = 'fecha';


// Meto el parrafo dentro del nuevo div que es su padre
nuevoComentario.appendChild(contenedorElemento);


// Meto la fecha dentro del nuevo div que es su padre
nuevoComentario.appendChild(contenedorFecha);

// Meto el nuevo div completo (con nodo y parrafo)
//Dentro del contenedor que esta en el html

contenedor.appendChild(nuevoComentario);

})

// agranda o reduce el alto del textarea
var textarea = document.getElementById("comment");
var newtexto = document.getElementById("texto");
var limit = 200;

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
  newtexto.style.height = (Math.min(textarea.scrollHeight, 300) + 80) + "px";

};


//Validación de la caja de Texto

var comentario = document.getElementById('comment');

//Este evento keyup permite se activa cada vez que se pulsa
// una tecla en la caja de texto
comentario.addEventListener('keyup',function(){

//Este if pregunta si el valor es vacio de ser asi
//Deshabilita el boton y le aplica una clase para cambiar el color
//Si no es vacio habilita el boton y le aplica otra clase
	if (comentario.value == ""){
		document.getElementById('btn').disabled=true;
		document.getElementById('btn').className = 'boton-desactivado';
	    document.getElementById('contador').innerHTML=140;
	} else {
		document.getElementById('btn').disabled=false;
		document.getElementById('btn').className = 'boton-activado';

		//Contar los caracteres de forma regresiva
		var restante = contador - comentario.value.length;
		document.getElementById('contador').innerHTML=restante;
	}


	if (comentario.value.length > 120 && comentario.value.length < 130) {
		document.getElementById('contador').className ='contador_red';
		
	}

   if (comentario.value.length > 130) {
		document.getElementById('contador').className ='contador_yellow';
		
	}

	if (comentario.value.length > 140){
		document.getElementById('btn').disabled=true;
	}

  

})


