$('#trabalhosAbrir').on('click', function() {
    $("#trabalhos").fadeIn('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeIn('3200');
    $("#sobre").fadeOut('600');
})

// function trabalhosFechar() {
//     $("#sobre").fadeOut('600');
//     $('#trabalhos').fadeOut('600');
//     $('#contato').fadeOut('700');
//     $('#fechar').fadeOut('300');
//     $(this).siblings().removeClass('active');
// }

$('#fechar').on('click', function() {
    $("#sobre").fadeOut('600');
    $('#trabalhos').fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeOut('600');
})


$('#contatoAbrir').on('click', function() {
    $("#contato").fadeIn('600');
    $('#trabalhos').fadeOut('700');
    $("#sobre").fadeOut('600');
    $('#fechar').fadeIn('3200');
})

// function contatoFechar() {
//     $("#sobre").fadeOut('600');
//     $('#trabalhos').fadeOut('600');
//     $('#contato').fadeOut('700');
//     $('#fechar').fadeOut('300');
// }

$('#sobreAbrir').on('click', function() {
    $("#sobre").fadeIn('600');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeIn('3200');
})


// function sobreFechar() {
//     $("#sobre").fadeOut('600');
//     $('#trabalhos').fadeOut('600');
//     $('#contato').fadeOut('700');
//     $('#fechar').fadeOut('300');
// }


function fecharpopup() {
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
            $("#sobre").fadeOut('300');
            $('#trabalhos').fadeOut('300');
            $('#contato').fadeOut('300');
            $('#fechar').fadeOut('300');
            $('.menu li.active').removeClass('active');
            $('.menu a.active').removeClass('active');
        }
    });
}