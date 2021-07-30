// 
// 
// 
// TELA DE CARREGAMENTO
setTimeout(function() {
     $('.loader-wrapper, .spinner').fadeOut(250);
}, 1800);
// 
// ---------------
function MenuAtivo() {
    $('.dropdown-menu li').on('click', function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
}