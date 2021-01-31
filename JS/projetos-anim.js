// APRESENTAÇAO >>>>--------
// abrir GALERIA ----
// PRIMEIRO PROJETO
$("#esconder-apresentacao").on('click', function() {
        $(".margem-div").fadeOut('600');
        $(".posicaoimagem").fadeOut('600');
        $(".apresentacao-img").fadeIn('600');
        $(".hover-gal-abrir").fadeOut('600');
        $(".posicao-info").fadeIn('600');
        $(".texto-galeria").fadeIn('600');
        $(".texto-projeto").fadeOut('600');
        $(".utilizados").fadeOut('600');
        $(".portfolio-list-galeria").fadeIn('600');
        $(".galeria-imagens").fadeIn('600');
        $('#FiltrarGaleria1').trigger('click');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // 
    // 


// SEGUNDO PROJETO
$("#esconder-apresentacao2").on('click', function() {
        $(".margem-div").fadeOut('600');
        $(".posicaoimagem").fadeOut('600');
        $(".apresentacao-img").fadeIn('600');
        $(".hover-gal-abrir").fadeOut('600');
        $(".posicao-info").fadeIn('600');
        $(".texto-galeria").fadeIn('600');
        $(".texto-projeto").fadeOut('600');
        $(".utilizados").fadeOut('600');
        $(".portfolio-list-galeria").fadeIn('600');
        $(".galeria-imagens").fadeIn('600');
        $('#FiltrarGaleria2').trigger('click');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // -------------

// TERCEIRO PROJETO
$("#esconder-apresentacao3").on('click', function() {
        $(".margem-div").fadeOut('600');
        $(".posicaoimagem").fadeOut('600');
        $(".apresentacao-img").fadeIn('600');
        $(".hover-gal-abrir").fadeOut('600');
        $(".posicao-info").fadeIn('600');
        $(".texto-galeria").fadeIn('600');
        $(".texto-projeto").fadeOut('600');
        $(".utilizados").fadeOut('600');
        $(".portfolio-list-galeria").fadeIn('600');
        $(".galeria-imagens").fadeIn('600');
        $('#FiltrarGaleria3').trigger('click');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // -------------


// abrir imagem -----
$("#abrir-IMG-Gal").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
    })
    // 
$("#abrir-IMG-Gal2").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
    })
    // 
$("#abrir-IMG-Gal3").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
    })
    // 
    // FECHAR GALERIA ----
$("#abrir-apresentacao").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
        $(".margem-div").fadeIn('600');
        $(".hover-gal-abrir").fadeIn('600');
        $(".posicao-info").fadeOut('600');
        $(".texto-galeria").fadeOut('600');
        $(".texto-projeto").fadeIn('600');
        $(".utilizados").fadeIn('600');
        $(".portfolio-list-galeria").fadeOut('600');
        $(".galeria-imagens").fadeOut('600');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // 
$("#abrir-apresentacao2").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
        $(".margem-div").fadeIn('600');
        $(".hover-gal-abrir").fadeIn('600');
        $(".posicao-info").fadeOut('600');
        $(".texto-galeria").fadeOut('600');
        $(".texto-projeto").fadeIn('600');
        $(".utilizados").fadeIn('600');
        $(".portfolio-list-galeria").fadeOut('600');
        $(".galeria-imagens").fadeOut('600');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // -------------

$("#abrir-apresentacao3").on('click', function() {
        $(".posicaoimagem").fadeIn('600');
        $(".apresentacao-img").fadeOut('600');
        $(".margem-div").fadeIn('600');
        $(".hover-gal-abrir").fadeIn('600');
        $(".posicao-info").fadeOut('600');
        $(".texto-galeria").fadeOut('600');
        $(".texto-projeto").fadeIn('600');
        $(".utilizados").fadeIn('600');
        $(".portfolio-list-galeria").fadeOut('600');
        $(".galeria-imagens").fadeOut('600');
        $(".abrir-menu-gal").fadeOut('600');
    })
    // -------------
    // FECHAR TODOS PROJETOS
$("#fechar-projeto").on('click', function() {
    $(".fundo-ul").fadeOut('500');
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

$("#fechar-menu-gal2").on('click', function() {
    $(".portfolio-list-galeria").fadeOut('600');
    $(".abrir-menu-gal").fadeIn('600');
})
$("#abrir-menu-gal2").on('click', function() {
    $(".portfolio-list-galeria").fadeIn('600');
    $(".abrir-menu-gal").fadeOut('600');
})

// ------------------
//

$("#fechar-menu-gal3").on('click', function() {
    $(".portfolio-list-galeria").fadeOut('600');
    $(".abrir-menu-gal").fadeIn('600');
})
$("#abrir-menu-gal3").on('click', function() {
    $(".portfolio-list-galeria").fadeIn('600');
    $(".abrir-menu-gal").fadeOut('600');
})

// ------------------
//