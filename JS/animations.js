$('#trabalhosAbrir').on('click', function() {
    $(".fundoPreto").fadeIn('500');
    $("#trabalhos").fadeIn('600');
    $('#contato').fadeOut('600');
    $('#fechar').fadeIn('3200');
    $("#sobre").fadeOut('600');
})

$('#contatoAbrir').on('click', function() {
    $(".fundoPreto").fadeIn('500');
    $('#contato').fadeIn('300');
    $("#sobre").fadeOut('600');
    $("#trabalhos").fadeOut('600');
    $('#fechar').fadeIn('3200');
})

$('#fechar').on('click', function() {
    $(".fundoPreto").fadeOut('500');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('600');
    $('#fechar').fadeOut('3200');
    $("#sobre").fadeOut('600');
})

$('#sobreAbrir').on('click', function() {
    $(".fundoPreto").fadeIn('500');
    $("#sobre").fadeIn('600');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeIn('3200');
})

$(".menu").draggable();

function fecharpopup() {
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
            $(".fundoPreto").fadeOut('600');
            $("#sobre").fadeOut('300');
            $('#trabalhos').fadeOut('300');
            $('#contato').fadeOut('300');
            $('#fechar').fadeOut('2200');
            $('.menu li.active').removeClass('active');
            $('.menu a.active').removeClass('active');
        }
    });
}