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

  $('div.elem').hover(
    function () {
      $(this).css(
        {
          transform: 'rotate(360deg)',
          backgroundColor: 'greenyellow',
          transition: '3s all'
        },
        $('div.elem__square').css({
          backgroundColor: 'pink',
          transition: ' 2s all'
        })
      );
    },
    function () {
      $(this).css(
        {
          transform: 'rotate(-360deg)',
          backgroundColor: 'rgb(188, 216, 223)',
          transition: '3s all'
        },
        $('div.elem__square').css({
          backgroundColor: 'rgb(188, 216, 223)',
          transition: ' 2s all'
        })
      );
    }
  );
});
