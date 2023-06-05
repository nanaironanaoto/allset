$(function ($) {
  $(window).on('load resize', function() {
    //ウィンドウサイズを取得する
    var w = $(window).width();
    //ウィンドウサイズが768より大きい場合の処理
    if( w > 768 ) {
      console.log('ウィンドウサイズは768より大きいです。');
      $(window).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        var parallax_obj01_top = -190; //初期位置
        $('.parallax-content>.parallax-image').css('object-position', '0 ' + parseInt(parallax_obj01_top - y / 30) + 'px');
      });
    //ウィンドウサイズが768以下の場合の処理
    } else {
      console.log('ウィンドウサイズは768以下です。');
      $(window).scroll(function () {
        var y = $(this).scrollTop();
        console.log(y);
        var parallax_obj01_top = 10; //初期位置
        $('.parallax-content>.parallax-image').css('object-position', '0 ' + parseInt(parallax_obj01_top - y / 20) + 'px');
      });
    }
  });   
});