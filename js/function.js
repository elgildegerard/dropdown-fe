$(document).ready(function(){
    
    // OCULTAMOS LISTA //
    $("ul").hide(); //OPUESTO --> .show()//
    
    
    $(".flecha").click(function(e){
        e.preventDefault();
        $("ul").slideToggle();    
    });
    
    $(".select").prepend("<p>Prueba</p>");
    
    

    
});