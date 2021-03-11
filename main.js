$(document).ready(function () {

    //SCORRERE A DX

    $(".fa-angle-right").click(function() {
        
        var imgInVista = $("img.active");
        imgInVista.removeClass("active");
        var prima = $("img.first");
        
        if(imgInVista.next("img")) {
            imgInVista.next("img").addClass("active");
        } else {
            prima.addClass("active");
            
        }
    });
    
    //SCORRERE A SX

    $(".fa-angle-left").click(function() {
        
        var imgInVista = $("img.active");
        imgInVista.removeClass("active");
        var ultima = $("img.last");
        
        if(imgInVista.prev("img")) {
            imgInVista.prev("img").addClass("active");
        } else {
           ultima.addClass("active");
            
        }
    });


});