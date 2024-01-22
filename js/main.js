(function ($) {
  $(function () {
    $('ul.nav__list').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .closest('div.main__block')
        .find('div.main__content')
        .css({
          display: 'none'
        })
        .removeClass('active')
        .eq($(this).index())
        .addClass('active')
        .css({
          display: 'block',
          color: 'red',
          transition: '3s all'
        });
    });
  });
})(jQuery);

$(window).on('load', function () {
  $('div.main__content').css({
    display: 'block',
    dispay: 'flex',
    flexDirection: 'column'
  });
});
