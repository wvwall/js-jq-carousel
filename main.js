$(document).ready(function () {

    //SCORRERE A DX


    $(".fa-angle-right").click(function() {
        
        var imgInVista = $("img.active");
        imgInVista.removeClass("active");

        var iInVista = $("i.active");
        iInVista.removeClass("active");
        
        var primaImg = $("img.first");
        var primoPallino = $("i.first");
        
        if(imgInVista.next("img").length) {
            imgInVista.next("img").addClass("active");
            iInVista.next("i").addClass("active");
        } else {
            primaImg.addClass("active");
            primoPallino.addClass("active");
            
        }
    });
    
    //SCORRERE A SX

    $(".fa-angle-left").click(function() {
        
        var imgInVista = $("img.active");
        imgInVista.removeClass("active");

        var iInVista = $("i.active");
        iInVista.removeClass("active");

        var ultimaImg = $("img.last");
        var ultimoPallino = $("i.last");
        
        if(imgInVista.prev("img").length) {
            imgInVista.prev("img").addClass("active");
            iInVista.prev("i").addClass("active");
        } else {
           ultimaImg.addClass("active");
           ultimoPallino.addClass("active");
            
        }
    });


    //SCORRERE CON FRECCE TASTIERA
    
    $(document).keyup(function(e) {
        
        if(e.keyCode == 39) {
            var imgInVista = $("img.active");
        imgInVista.removeClass("active");

        var iInVista = $("i.active");
        iInVista.removeClass("active");
        
        var primaImg = $("img.first");
        var primoPallino = $("i.first");
        
        if(imgInVista.next("img").length) {
            imgInVista.next("img").addClass("active");
            iInVista.next("i").addClass("active");
        } else {
            primaImg.addClass("active");
            primoPallino.addClass("active");
            
        }
        }
        if(e.keyCode == 37) {
            var imgInVista = $("img.active");
        imgInVista.removeClass("active");

        var iInVista = $("i.active");
        iInVista.removeClass("active");

        var ultimaImg = $("img.last");
        var ultimoPallino = $("i.last");
        
        if(imgInVista.prev("img").length) {
            imgInVista.prev("img").addClass("active");
            iInVista.prev("i").addClass("active");
        } else {
           ultimaImg.addClass("active");
           ultimoPallino.addClass("active");
            
        }
        }
    });

    //CLICK SU PALLINI

    $(".slider-wrapper .nav i").click(function(){
       var dotPos =  $(".slider-wrapper .nav i").index(this);
        var images = $(".slider-wrapper .images img");

        $(".slider-wrapper .nav i").removeClass("active");
        images.removeClass("active");

        $(this).addClass("active");
        images.eq(dotPos).addClass("active");
    })


});


