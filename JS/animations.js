// // *****
// Animação Menu -------------- ****
$('#trabalhosAbrir').on('click', function() {
    $(window).scrollTop(0);
    $("#trabalhos").fadeIn('600');
    $('#TodosFiltrar').trigger('click');
    $('#contato').fadeOut('1300');
    $('#servico').fadeOut("700");
    $('#contato').fadeOut('600');
    $(".fundoPreto").fadeIn('500');
    $('#fechar').fadeIn('13000');
    $("#sobre").fadeOut('600');
    $('.LogoMenu').fadeIn('1300');
    $('#IA-MenuBar').fadeIn('200');
})

$('#contatoAbrir').on('click', function() {
    $(window).scrollTop(0);
    $('#contato').fadeIn('400');
    $('#servico').fadeOut("700");
    $("#sobre").fadeOut('600');
    $("#trabalhos").fadeOut('600');
    $(".fundoPreto").fadeIn('500');
    $('#fechar').fadeIn('13000');
    $('.LogoMenu').fadeIn('1300');
    $('#IA-MenuBar').fadeIn('200');
})

$('#sobreAbrir').on('click', function() {
    $(window).scrollTop(0);
    $('#sobre').fadeIn('400');
    $('#servico').fadeOut("700");
    $("#contato").fadeOut('600');
    $("#trabalhos").fadeOut('600');
    $(".fundoPreto").fadeIn('500');
    $('#fechar').fadeIn('13000');
    $('.LogoMenu').fadeIn('1300');
    $('#IA-MenuBar').fadeIn('200');
})

$('#servicoAbrir').on('click', function() {
    $(window).scrollTop(0);
    $("#servico").fadeIn('1300');
    $('#contato').fadeOut('1300');
    $('#sobre').fadeOut('1300');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('700');
    $(".fundoPreto").fadeIn('500');
    $('#fechar').fadeIn('13000');
    $('.LogoMenu').fadeIn('1200');
    $('#IA-MenuBar').fadeIn('200');
})

$('#fechar').on('click', function() {
        $('#servico').fadeOut("700");
        $('#contato').fadeIn('700');
        $("#trabalhos").fadeOut('600');
        $('#contato').fadeOut('600');
        $('.fundoPreto').slideUp('35530');
        $('#fechar').fadeOut('1300');
        $("#sobre").fadeOut('600');
        $('.LogoMenu').slideUp('1300');
        $('#IA-MenuBar').fadeOut('200');
        $('#esconder-menu').fadeIn('1200')
    })
    // 

// Responsivos -------------- ****
$('#IA-MenuBar').on('click', function() {
    $('#IA-MenuBar').fadeOut('900');
    $('#IA-MenuOpen').fadeIn('900');
    $('#esconder-menu').fadeOut('900');
})

$('#IA-MenuOpen').on('click', function() {
    $('#esconder-menu').fadeIn('900');
    $('#IA-MenuBar').fadeIn('9000');
    $('#IA-MenuOpen').fadeOut('900');
})



// function fecharpopup() {
//     $(document).on('keydown', function(e) {
//         // if (e.keyCode === 27) {
//         //     $('#servico').fadeOut("700");
//         //     $('.LogoMenu').slideUp('1300');
//         //     $(".fundoPreto").fadeOut('600');
//         //     $("#sobre").fadeOut('700');
//         //     $("#contato").fadeOut('700');
//         //     $('#trabalhos').fadeOut('300');
//         //     $('#fechar').fadeOut('1300');
//         //     $('.menu li.active').removeClass('active');
//         //     $('.menu a.active').removeClass('active');
//         //     $('#esconder-menu').fadeIn('1200');
//         //     $('#IA-MenuBar').fadeOut('1200');
//         //     $('#IA-MenuOpen').fadeOut('1100');
//         // }
//     });
// }

$(".imagePotrait").each(function() {
        // Uncomment the following if you need to make this dynamic
        //var refH = $(this).height();
        //var refW = $(this).width();
        //var refRatio = refW/refH;
        // Hard coded value...
        var refRatio = 240 / 300;

        var imgH = $(this).children("img").height();
        var imgW = $(this).children("img").width();

        if ((imgW / imgH) < refRatio) {
            $(this).addClass("portrait");
        } else {
            $(this).addClass("landscape");
        }
    })
    // -------------------

// Abrir telas de PROJETOS
$("#projeto1").on('click', function() {
    $('#primeiro-projeto').fadeIn('600');
    $(window).scrollTop(0);
    $(".fundo-ul").fadeIn('500');
    $('#FiltrarGaleria1').trigger('click');
    $('#abrir-apresentacao').trigger('click');
    $('#fechar-projeto').fadeIn('600');
    $("#trabalhos").fadeOut('600');
})

$("#projeto2").on('click', function() {
    $('#segundo-projeto').fadeIn('600');
    $(window).scrollTop(0);
    $(".fundo-ul").fadeIn('500');
    $('#abrir-apresentacao').trigger('click');
    $('#fechar-projeto').fadeIn('600');
    $("#trabalhos").fadeOut('600');
})

$("#projeto3").on('click', function() {
    $('#terceiro-projeto').fadeIn('600');
    $(window).scrollTop(0);
    $(".fundo-ul").fadeIn('500');
    $('#abrir-apresentacao').trigger('click');
    $('#fechar-projeto').fadeIn('600');
    $("#trabalhos").fadeOut('600');
})

$("#projeto4").on('click', function() {
    $('#quarto-projeto').fadeIn('600');
    $(window).scrollTop(0);
    $(".fundo-ul").fadeIn('500');
    $('#abrir-apresentacao').trigger('click');
    $('#fechar-projeto').fadeIn('600');
    $("#trabalhos").fadeOut('600');
})

$("#projeto5").on('click', function() {
    $('#quinto-projeto').fadeIn('600');
    $(window).scrollTop(0);
    $(".fundo-ul").fadeIn('500');
    $('#abrir-apresentacao').trigger('click');
    $('#fechar-projeto').fadeIn('600');
    $("#trabalhos").fadeOut('600');
})

$("#projeto6").on('click', function() {
    $('#sexto-projeto').fadeIn('600');
    $(window).scrollTop(0);
    $(".fundo-ul").fadeIn('500');
    $('#abrir-apresentacao').trigger('click');
    $('#fechar-projeto').fadeIn('600');
    $("#trabalhos").fadeOut('600');
})

$("#projeto7").on('click', function() {
    $('#setimo-projeto').fadeIn('600');
    $(window).scrollTop(0);
    $(".fundo-ul").fadeIn('500');
    $('#abrir-apresentacao').trigger('click');
    $('#fechar-projeto').fadeIn('600');
    $("#trabalhos").fadeOut('600');
})

$("#projeto8").on('click', function() {
        $('#oitavo-projeto').fadeIn('600');
        $('#abrir-apresentacao8').trigger('click');
        $(window).scrollTop(0);
        $(".fundo-ul").fadeIn('500');
        $('#FiltrarGaleria8').trigger('click');
        $('#fechar-projeto').fadeIn('600');
        $("#trabalhos").fadeOut('600');
    })
    // -------------