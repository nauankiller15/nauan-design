// Animação Menu
$('#trabalhosAbrir').on('click', function() {
    $('#contato').fadeOut('1300');
    $(".fundoPreto").fadeIn('500');
    $("#trabalhos").fadeIn('600');
    $('#contato').fadeOut('600');
    $('#fechar').fadeIn('1200');
    $("#sobre").fadeOut('600');
    $('.LogoMenu').fadeIn('1300');
    $('#TodosFiltrar').trigger('click');
    $('#IA-MenuBar').fadeIn('200');
})

$('#contatoAbrir').on('click', function() {
    $(".fundoPreto").fadeIn('500');
    $('#contato').fadeIn('400');
    $("#sobre").fadeOut('600');
    $("#trabalhos").fadeOut('600');
    $('#fechar').fadeIn('1200');
    $('.LogoMenu').fadeIn('1300');
    $('#IA-MenuBar').fadeIn('200');
})

$('#sobreAbrir').on('click', function() {
    $('#contato').fadeOut('1300');
    $(".fundoPreto").fadeIn('500');
    $("#sobre").fadeIn('1300');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeIn('1200');
    $('.LogoMenu').fadeIn('1200');
    $('#IA-MenuBar').fadeIn('200');
})

$('#fechar').on('click', function() {
        $('#contato').fadeIn('700');
        $(".fundoPreto").fadeOut('500');
        $("#trabalhos").fadeOut('600');
        $('#contato').fadeOut('600');
        $('#fechar').fadeOut('1300');
        $("#sobre").fadeOut('600');
        $('.LogoMenu').slideUp('1300');
        $('#IA-MenuBar').fadeOut('200');
        $('#esconder-menu').fadeIn('1200')
    })
    // 

// Responsivos
$('#IA-MenuBar').on('click', function() {
    $('#IA-MenuBar').fadeOut('600');
    $('#IA-MenuOpen').fadeIn('100');
    $('#esconder-menu').fadeOut('500');
})

$('#IA-MenuOpen').on('click', function() {
        $('#esconder-menu').fadeIn('100');
        $('#IA-MenuBar').fadeIn('600');
        $('#IA-MenuOpen').fadeOut('100');
    })
    // 

function fecharpopup() {
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
            $('.LogoMenu').slideUp('1300');
            $(".fundoPreto").fadeOut('600');
            $("#sobre").fadeOut('300');
            $('#trabalhos').fadeOut('300');
            $('#fechar').fadeOut('1300');
            $('.menu li.active').removeClass('active');
            $('.menu a.active').removeClass('active');
            $('#esconder-menu').fadeIn('1200');
            $('#IA-MenuBar').fadeOut('1200');
            $('#IA-MenuOpen').fadeOut('1100');
        }
    });
}

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