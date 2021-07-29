// 
// 
// 
// TELA DE CARREGAMENTO
$(window).on('load', function() {
    $('.loader-wrapper, .spinner').fadeOut(250);
});
// 
// ---------------
function MenuAtivo() {
    $('.dropdown-menu li').on('click', function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
}