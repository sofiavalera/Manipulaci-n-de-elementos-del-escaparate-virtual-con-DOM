# Manipulación de elementos del escaparate virtual con DOM

    SOFIA VALERA FERNÁNDEZ

Contenido

INTRODUCCION

DESPLEGABLE DE PAISES

GENERAR TARJETA DE CREDITO

SUMAR UNO CUANDO ESTA LOGUEADO

GENERAR COMENTARIOS

VALIDACION CODIGO


















## INTRODUCCION

La práctica trata sobre la Manipulación de elementos del escaparate virtual con DOM, a continuación, explicare como lo he llevado a cabo:

## DESPLEGABLE DE PAISES

**REGISTRO.HTML**
En el campo del formulario que estan los paises voy a generalos por DOM.

    <label for="pais">Pais
        <select id="pais" type="pais">
            <!--generado por DOM-->
        </select>
    </label>

**DOM.JS**
En dom.js tengo la funcion que genera los paises mediante DOM, en el array de paises tengo almacenados todos los paises que estaran en el select. La funcion para llevarlo a cabo, es mediante un for que recorre todo el ARRAY. Y creo el elemento Option, y le asigno los paises. Y le pongo por defecto a España. 

    for(var i=0; i<paises.length; i++){
        
        var option = document.createElement("option"); //creacion elemento option
        option.text = paises[i]; //asignamos que el texto de option sean los paises
        
        if(option.text === 'Spain'){ //si el texto es españa
            
            option.setAttribute('selected',true); //por defecto se muestre
        }
        
        option.value = paises[i];  //el valor sea el nombre del pais
        var select = document.getElementById("pais"); //cogemos el id pais
        select.appendChild(option); //mostramos los elementos select
    } 

## GENERAR TARJETA DE CREDITO 

**REGISTRO.HTML**
La parte que se muestra en el HTML es:

    <div id="oculto" style="display: none">
        <div id="numTarjeta">
            <label>Numero tarjeta credito <!--generado con DOM--> </label>
        </div>    
    </div>

Dentro del <label> generamos la tarjeta de credito.
**DOM.JS**
Lo dividimos en dos partes, una en la que genero la tarjeta de credito y otra en la que hago que se muestre o no, dependiendo de si el campo direccion esta relleno o no.

    var inputTarjeta = document.createElement("input");
    inputTarjeta.type = "text";
    inputTarjeta.className = "tarjetaC";
    inputTarjeta.setAttribute("pattern","[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}");
    inputTarjeta.setAttribute("placeholder","xxxx-xxxx-xxxx-xxxx");
    numTarjeta.appendChild(inputTarjeta); 

Creo un **input** y le asigno una clase y una expresion regular para que valide la tarjeta , y placeholder para que aparezca por dentro lo que hay que rellenar. Por otro lado, tengo otra funcion que, muestra o oculta el div de la tarjeta de credito:

    function mostrar(){    
        direccion = document.registro.direccion.value;

        if(direccion !== ''){
            document.getElementById('oculto').style.display='block'; 
            document.getElementById('numTarjeta').required = true; 

        }else if(direccion === ''){
            document.getElementById('oculto').style.display='none';
        }
    }
    
Saco el valor de la direccion y compruebo si el campo esta vacio o lleno. Si no esta vacio lo muesottro y mediante **required** hago obligatorio escribir la contraseña.

## SUMAR UNO CUANDO ESTA LOGUEADO

**VERTODOS.HTML**
En la parte del html, añado ID identificativos a cada icono. Para luego enlazarlos con el JS. 

     <figcaption>
        <p>8,50€ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"><span id="like"class="far fa-heart"> 40</span></a>
        <a href="#"><span id="star" class="far fa-star"> 3</span></a>
        <a href="#"><span id="coment" class="far fa-comment"> 3</span></a>
        </p>
    </figcaption>

**DOM.JS**
Cuando el usuario esta logueado se hace click se puede sumar uno a los likes, los favoritos y al comentario cuando se añade.

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

Y para que al hacer click se añadan llamamos a las funciones:

    //sumar iconos al hace click
    $('#star').click(function(){ 

        sumarIconoStar();
    });
    $('#like').click(function(){ 

         sumarLike();
    });

## GENERAR COMENTARIOS

**VERTODOS.HTML**
Creo un div con un ID que es donde iran los mensajes:

    <div id="conMensajes">
        <!--Generado con DOM-->
    </div>

**DOM.JS**
Ahora voy a generar los comentarios mediante DOM, de dos maneras si esta logueado o no:
Los va a generar automaticamente los mensajes, despues compruebo si esta logueado, y si lo esta añado el **textarea** con la opcion de añadir los mensajes tantos como quiera el usuario, con el nombre de usuario correspondiente. Y mostrare solo tres mensajes, para que no quede saturada la pagina de mensajes.

Primeramente creo el div:

    //Creo contenedor div con su ID
    var contenedor = document.createElement("div");   
    contenedor.id = 'comentario';
    
Creo el array de los comentarios, tres de los cuales son fijos:

    //array con comentarios fijos
    var ArrayComentarios = ["Me encanta este sitio web!"," Fantastico maquillaje"," 100% recomendable"];

Comrpuebo si existe el ID, y creo el titulo de mensajes con los parrafos y hago la llamada a la funcion que pinta los comen
tarios pasandole el array.

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

Creo una funcion para agregar los comentarios, y mediante un push, los añado al array y una vez añadido sumo uno, llamando a la funcion.

    //funcion agregar comentario
    function agregarComentario(){

        var anadir = document.getElementById("aniadirTexto").value;

        ArrayComentarios.push(anadir); //añada al array los comentarios nuevos

        pintarComentario(ArrayComentarios);
        sumarIconos(); //sumo 1 cada vez que se añada un comentario

    }

Mostrare los comentarios del array que se han añadido o que estaban ya en el, borro la clase slow que es lo de los parrafos, para que te saquen los 3 ultimos comentarios, mediante al array. 

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

Para que al hacer click se muestren u oculten los mensajes de los comentarios:

    //cuando se haga click en el ID "uno" muestre mensajes o los oculte
    $('#coment').click(function(){ 

        if(document.getElementById("comentario").style.display == 'none'){ //si estan ocultos

            document.getElementById("comentario").style.display = 'block'; //muestralos

        }else{
             document.getElementById("comentario").style.display = 'none';  //si no ocultalos
        }  

    });
    
Cuando esta logueado, cambia LOG IN por LOG OUT, y tenga la opcion de añadir los comentarios, mediante la creacion de un textarea, con un placeholder con el texto de "añade comentario" y un boton para añadirlo. Y un enlace a la paginas de producto.html, para ver todos los mensajes.

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

                $('#enlaceVerTodos').click(function(){      //cuando se haga click en ver todos te muestre todos los mensajes

                     document.getElementById("enlaceVerTodos").href="./producto.html";

                });
        }

    }, false);

## VALIDACION CODIGO

A traves de este enlace, hay un validador para poder ver si sintacticamente mis archivos JS, son validos.

http://esprima.org/demo/validate.html

![Validacion](/Readme/1.png)

Y a traves de la W3C valido los archivos html.
