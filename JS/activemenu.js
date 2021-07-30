// 
// 
// 
// TELA DE CARREGAMENTO
setTimeout(function() {
     $('.loader-wrapper, .spinner').fadeOut(250);
}, 2500);
// 
// ---------------
function MenuAtivo() {
    $('.dropdown-menu li').on('click', function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
}