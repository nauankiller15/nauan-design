$('#trabalhosAbrir').on('click', function() {
    $(".fundoPreto").fadeIn('100');
    $("#trabalhos").fadeIn('600');
    $('#contato').fadeOut('600');
    $('#fechar').fadeIn('3200');
    $("#sobre").fadeOut('600');
})

$('#contatoAbrir').on('click', function() {
    $(".fundoPreto").fadeIn('100');
    $('#contato').fadeIn('300');
    $("#sobre").fadeOut('600');
    $("#trabalhos").fadeOut('600');
    $('#fechar').fadeIn('3200');
})

$('#fechar').on('click', function() {
    $(".fundoPreto").fadeOut('100');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('600');
    $('#fechar').fadeOut('1200');
    $("#sobre").fadeOut('600');
})

$('#sobreAbrir').on('click', function() {
    $(".fundoPreto").fadeIn('100');
    $("#sobre").fadeIn('600');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeIn('3200');
})

function fecharpopup() {
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
            $(".fundoPreto").fadeOut('300');
            $("#sobre").fadeOut('300');
            $('#trabalhos').fadeOut('300');
            $('#contato').fadeOut('300');
            $('#fechar').fadeOut('300');
            $('.menu li.active').removeClass('active');
            $('.menu a.active').removeClass('active');
        }
    });
}