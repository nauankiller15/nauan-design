// APRESENTAÇAO >>>>--------
// abrir apresentacao ----
$("#esconder-apresentacao").on('click', function() {
        $(".margem-div").fadeOut('600');
        $(".posicaoimagem").fadeOut('600');
        $(".apresentacao-img").fadeIn('600');
        $(".hover-gal-abrir").fadeOut('600');
        $(".texto-ver-info").fadeIn('600');
        $(".texto-galeria").fadeIn('600');
        $(".texto-projeto").fadeOut('600');
        $(".utilizados").fadeOut('600');
        $(".portfolio-list-galeria").fadeIn('600');
        $(".galeria-imagens").fadeIn('600');
        $('#FiltrarGaleria1').trigger('click');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // 
$("#esconder-apresentacao8").on('click', function() {
        $(".margem-div").fadeOut('600');
        $(".posicaoimagem").fadeOut('600');
        $(".apresentacao-img").fadeIn('600');
        $(".hover-gal-abrir").fadeOut('600');
        $(".texto-ver-info").fadeIn('600');
        $(".texto-galeria").fadeIn('600');
        $(".texto-projeto").fadeOut('600');
        $(".utilizados").fadeOut('600');
        $(".portfolio-list-galeria").fadeIn('600');
        $(".galeria-imagens").fadeIn('600');
        $('#FiltrarGaleria8').trigger('click');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // -------------

// abrir imagem -----
$("#abrir-IMG-Gal").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
    })
    // 
$("#abrir-IMG-Gal8").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
    })
    // 
    // fechar apresentacao ----
$("#abrir-apresentacao").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
        $(".margem-div").fadeIn('600');
        $(".hover-gal-abrir").fadeIn('600');
        $(".texto-ver-info").fadeOut('600');
        $(".texto-galeria").fadeOut('600');
        $(".texto-projeto").fadeIn('600');
        $(".utilizados").fadeIn('600');
        $(".portfolio-list-galeria").fadeOut('600');
        $(".galeria-imagens").fadeOut('600');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // 
$("#abrir-apresentacao8").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
        $(".margem-div").fadeIn('600');
        $(".hover-gal-abrir").fadeIn('600');
        $(".texto-ver-info").fadeOut('600');
        $(".texto-galeria").fadeOut('600');
        $(".texto-projeto").fadeIn('600');
        $(".utilizados").fadeIn('600');
        $(".portfolio-list-galeria").fadeOut('600');
        $(".galeria-imagens").fadeOut('600');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // -------------

// fechar proejetos
$("#fechar-projeto").on('click', function() {
    $("#trabalhos").fadeIn('300');
    $('#TodosFiltrar').trigger('click');
    $('#fechar-projeto').fadeOut('200');
    $('#primeiro-projeto').fadeOut('1300');
    $('#segundo-projeto').fadeOut('1300');
    $('#terceiro-projeto').fadeOut('1300');
    $('#quarto-projeto').fadeOut('1300');
    $('#quinto-projeto').fadeOut('1300');
    $('#sexto-projeto').fadeOut('1300');
    $('#setimo-projeto').fadeOut('1300');
    $('#oitavo-projeto').fadeOut('1300');
    $(window).scrollTop(0);
})


// menu sidebar
$("#fechar-menu-gal").on('click', function() {
    $(".portfolio-list-galeria").fadeOut('600');
    $(".abrir-menu-gal").fadeIn('600');
})
$("#abrir-menu-gal").on('click', function() {
        $(".portfolio-list-galeria").fadeIn('600');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // -------------

$("#fechar-menu-gal8").on('click', function() {
    $(".portfolio-list-galeria").fadeOut('600');
    $(".abrir-menu-gal").fadeIn('600');
})
$("#abrir-menu-gal8").on('click', function() {
        $(".portfolio-list-galeria").fadeIn('600');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // ------------------
    //