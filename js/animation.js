$(function () {
  $('li.nav__item').click(function () {
    $(this).css({
      opacity: '0.6',
      transition: '2s all'
    });
  });

  $('h1.header__heading').click(function () {
    $(this).css({
      color: 'black',
      transition: '3s all'
    });
  });
});
