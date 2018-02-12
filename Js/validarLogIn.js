//comprobar si el usuario y la contraseña coinciden
function comprobarLog(){
    
    var nombreUser = document.signup.email.value;
    var contraseniaUser = sha256(document.signup.contrasenia.value);

    if(obtenerCookie("nombreusuario") === nombreUser && obtenerCookie("contrasenia") === contraseniaUser){
        
        alert("Hola "+nombreUser);
        //creo una cookie para hacer la comprobacion y cambiar log In por Log Out
        document.cookie="sesion=creada";

    }
    
}
//acceder al valor que tiene una cookie a partir del nombre que tiene.
function obtenerCookie(clave){  //se le pasa el nombre de la cookie

    var name = clave + "=";
    var ca = document.cookie.split(';'); //separar las cookies
    for(var i=0; i<ca.length; i++) { //tamaño total
        var c = ca[i];
        //nos devuelve el contenido que hay despues del nombre
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
//Cerrar ventana de cookies
function ok(){
    
    document.getElementById("barraaceptacion").style.display="none";
}

//Creo contenedor div con su ID
var contenedor = document.createElement("div");   
contenedor.id = 'comentario'; 

//array con comentarios fijos
var ArrayComentarios = ["Me encanta este sitio web!"," Fantastico maquillaje"," 100% recomendable"];

//compruebo si existe el ID conMensajes
if(document.getElementById("conMensajes")){

  var contenMensajes = document.getElementById("conMensajes");
  contenMensajes.appendChild(contenedor);   

  var titulo = document.createElement("h3");    //creacion titulo comentario
  titulo.className="slowTitulo";

  //creacion parrafo "comentarios"
  var comen = document.createTextNode("comentarios");
  titulo.appendChild(comen);

  var elementTitulo = document.getElementById("comentario");
  elementTitulo.appendChild(titulo);

    //llamada a la funcion que pinta los comentarios
    pintarComentario(ArrayComentarios); 

} 

//funcion agregar comentario
function agregarComentario(){
    
    var anadir = document.getElementById("aniadirTexto").value;
    
    ArrayComentarios.push(anadir); //añada al array los comentarios nuevos
    
    pintarComentario(ArrayComentarios);
    sumarIconos(); //sumo 1 cada vez que se añada un comentario
    
}


//mostrar comentarios añadidos y los que habia
function pintarComentario(ArrayComentarios){
                 
        if(document.getElementsByClassName("slow")){  //comprobamos si esta la clase slow que es la de los parrafos

            $(".slow").remove();    //borramos todos los elementos con esa clase
        }

        for(var i=ArrayComentarios.length; i>(ArrayComentarios.length-3); i--){     //array para que se muestren tres comentarios
                    
            var para = document.createElement("p");     //creacion parrafos
            para.className="slow"; //le damos clase slow a esos parrafos
            var node = document.createTextNode(obtenerCookie("nombreusuario")+": "+ArrayComentarios[i-1]);  //añadimos nombre de usuario
            para.appendChild(node);
            var element = document.getElementById("comentario");
            
            //salgan los comentarios arriba del textArea
            element.insertBefore(para,element.childNodes[1]);

        }
        
}

//cuando se haga click en el ID "uno" muestre mensajes o los oculte
$('#coment').click(function(){ 

    if(document.getElementById("comentario").style.display == 'none'){ //si estan ocultos
        
        document.getElementById("comentario").style.display = 'block'; //muestralos

    }else{

         document.getElementById("comentario").style.display = 'none';  //si no ocultalos

    }

});

//sumar iconos al hace click
$('#star').click(function(){ 

    sumarIconoStar();
});
$('#like').click(function(){ 

     sumarLike();
});

//cuando se carge la pagina entera 
document.addEventListener('DOMContentLoaded', function(logueado) {
    
   
    if(obtenerCookie("sesion") != ""){      //si esta logueado pueda añadir comentarios
        
        document.getElementById("log").innerHTML="log out |"; //cambio logIn por logOut
        
          //añadir comentarios
          if(document.getElementById("comentario")){
            var texto = document.createElement("textarea");
            texto.id="aniadirTexto";
            texto.setAttribute("placeholder","añade comentario");

            document.getElementById("comentario").appendChild(texto);
            //boton
            var boton = document.createElement("button");
            boton.id ="botonComentario";
            boton.setAttribute("onClick","agregarComentario()");
            document.getElementById("comentario").appendChild(boton);
            document.getElementById("botonComentario").textContent = "Enviar";
        
            var verTodos = document.createElement("a");
            verTodos.id ="enlaceVerTodos";
            verTodos.className ="ver";  
            /*verTodos.setAttribute("onClick","pintarComentario(ArrayComenenatrios)";*/
            document.getElementById("comentario").appendChild(verTodos);
            document.getElementById("enlaceVerTodos").textContent = "Ver todos";                   
        
          }  
            //contenedor.style.display="block";
            $('#enlaceVerTodos').click(function(){      //cuando se haga click en ver todos te muestre todos los mensajes
                                 
                 document.getElementById("enlaceVerTodos").href="./producto.html";
            });
    }

}, false);

//borra la cookie si existe de sesion
function cerrarSesion(){
    
    if(obtenerCookie("sesion") != ""){
        
          document.cookie = 'sesion' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

//sumar uno a los comentarios
function sumarIconos(){
    
    var cont = $("#coment").html();
    cont = parseInt(cont);
    cont++;
    
    $("#coment").text(cont);
            
}
//sumar uno a los fav
function sumarIconoStar(){
    
    var cont = $("#star").html();
    cont = parseInt(cont);
    cont++;
    
    $("#star").text(cont);
            
}
//sumar uno a los likes
function sumarLike(){
    
    var cont = $("#like").html();
    cont = parseInt(cont);
    cont++;
    
    $("#like").text(cont);
            
}