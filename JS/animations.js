function trabalhosAbrir() {
    $("#trabalhos").show();
}

function trabalhosFechar() {
    $("#trabalhos").fadeOut('300');
}


function contatoAbrir() {
    $("#contato").show();
}

function contatoFechar() {
    $("#contato").fadeOut('300');
}


function fecharpopup() {
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) {
            $('#trabalhos').fadeOut('300');
            $('#contato').fadeOut('300');
        }
    });
}