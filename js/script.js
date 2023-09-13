
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // start
  $(document).ready(function () {
    var prevScrollPos = window.pageYOffset;
    var scrollTimer;

    $(window).on('scroll', function () {
      clearTimeout(scrollTimer);
      var currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        $('.header').removeClass('hidden');
      } else {
        $('.header').addClass('hidden');
      }

      scrollTimer = setTimeout(function () {
        $('.header').removeClass('hidden');
      }, 300); // 300ミリ秒（0.3秒）間スクロールがない場合にヘッダーを再表示

      prevScrollPos = currentScrollPos;
    });
  });


  // end
});
