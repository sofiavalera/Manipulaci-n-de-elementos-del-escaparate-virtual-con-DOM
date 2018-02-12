/*--FUNCIONALIDAD UNO--*/
//paises 
function paises(){  
    
    var paises = new Array("Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
    "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
    "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");
    
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
}
/*--FUNCIONALIDAD DOS--*/
//generar campo tarjeta de credito
var inputTarjeta = document.createElement("input");
inputTarjeta.type = "text";
inputTarjeta.className = "tarjetaC";
inputTarjeta.setAttribute("pattern","[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}");
inputTarjeta.setAttribute("placeholder","xxxx-xxxx-xxxx-xxxx");
numTarjeta.appendChild(inputTarjeta);

//mostrar elementos ocultos -> tarjeta de credito
function mostrar(){    
    direccion = document.registro.direccion.value;
    
    if(direccion !== ''){
        document.getElementById('oculto').style.display='block'; 
        document.getElementById('numTarjeta').required = true; 

    }else if(direccion === ''){
        document.getElementById('oculto').style.display='none';
    }
}

/*--FUNCIONALIDAD TRES--*/
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