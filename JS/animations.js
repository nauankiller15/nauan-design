$('#trabalhosAbrir').on('click', function() {
    $('#contato').fadeOut('1300');
    $(".fundoPreto").fadeIn('500');
    $("#trabalhos").fadeIn('600');
    $('#contato').fadeOut('600');
    $('#fechar').fadeIn('1200');
    $("#sobre").fadeOut('600');
    $('.LogoMenu').fadeIn('1300');
    $('#TodosFiltrar').trigger('click');
})

$('#contatoAbrir').on('click', function() {
    $(".fundoPreto").fadeIn('500');
    $('#contato').fadeIn('400');
    $("#sobre").fadeOut('600');
    $("#trabalhos").fadeOut('600');
    $('#fechar').fadeIn('1200');
    $('.LogoMenu').fadeIn('1300');
})

$('#fechar').on('click', function() {
    $('#contato').fadeIn('700');
    $(".fundoPreto").fadeOut('500');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('600');
    $('#fechar').fadeOut('1300');
    $("#sobre").fadeOut('600');
    $('.LogoMenu').slideUp('1300');
})

$('#sobreAbrir').on('click', function() {
    $('#contato').fadeOut('1300');
    $(".fundoPreto").fadeIn('500');
    $("#sobre").fadeIn('1300');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeIn('1200');
    $('.LogoMenu').fadeIn('1200');
})

function fecharpopup() {
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
            $('.LogoMenu').slideUp('1300');
            $(".fundoPreto").fadeOut('600');
            $("#sobre").fadeOut('300');
            $('#trabalhos').fadeOut('300');
            $('#fechar').fadeOut('1300');
            $('#fechar').slideDown('3200');
            $('.menu li.active').removeClass('active');
            $('.menu a.active').removeClass('active');
        }
    });
}