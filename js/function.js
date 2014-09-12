$(document).ready(function(){
    
    // OCULTAMOS LISTA //
    
    var ul = $("ul");
    ul.hide(); //OPUESTO --> .show()//
    
    
    $(".flecha").click(function(e){
        e.preventDefault();
        ul.slideToggle();    
    });
    
    $(".select").prepend("<p>Prueba</p>");
    
    

    
});