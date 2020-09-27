function trabalhosAbrir() {
    $("#trabalhos").fadeIn('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeIn('3200');
    $("#sobre").fadeOut('600');
}

function trabalhosFechar() {
    $("#sobre").fadeOut('600');
    $('#trabalhos').fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeOut('300');
}


function FecharTudo() {
    $("#sobre").fadeOut('600');
    $('#trabalhos').fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeOut('600');
}

function contatoAbrir() {
    $("#contato").fadeIn('600');
    $('#trabalhos').fadeOut('700');
    $("#sobre").fadeOut('600');
    $('#fechar').fadeIn('3200');
}

function contatoFechar() {
    $("#sobre").fadeOut('600');
    $('#trabalhos').fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeOut('300');
}

function sobreAbrir() {
    $("#sobre").fadeIn('600');
    $("#trabalhos").fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeIn('3200');
}


function sobreFechar() {
    $("#sobre").fadeOut('600');
    $('#trabalhos').fadeOut('600');
    $('#contato').fadeOut('700');
    $('#fechar').fadeOut('300');
}


function fecharpopup() {
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
            $("#sobre").fadeOut('300');
            $('#trabalhos').fadeOut('300');
            $('#contato').fadeOut('300');
            $('#fechar').fadeOut('300');
        }
    });
}