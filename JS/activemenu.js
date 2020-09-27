function MenuAtivo() {
    $('.dropdown-menu li').on('click', function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
}