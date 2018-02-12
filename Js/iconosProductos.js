//cambiar iconos claros por iconos oscuros: like, fav, comment

$('.far.fa-heart').on('click', function (e){
    
    cambiarIcon($(this), 'far fa-heart', 'fas fa-heart');
}).hover(function(){
   
    cambiarIcon($(this), 'far fa-heart','fas fa-heart');
});

$('.far.fa-star').on('click', function (e){
    
    cambiarIcon($(this), 'far fa-star', 'fas fa-star');
}).hover(function(){
   
    cambiarIcon($(this), 'far fa-star','fas fa-star');
});

$('.far.fa-comment').on('click', function (e){
    
    cambiarIcon($(this), 'far fa-comment', 'fas fa-comment');
}).hover(function(){
   
    cambiarIcon($(this), 'far fa-comment','fas fa-comment');
});


function cambiarIcon(producto, sinRelleno, conRelleno){
    
    producto.toggleClass(sinRelleno).toggleClass(conRelleno);
    
}