$(document).ready(function(){
    
    // OCULTAMOS LISTA //
    $("ul").hide(); //OPUESTO --> .show()//
    
    
    $(".flecha").click(function(){
        $("ul").slideToggle();
        
    });

    
});