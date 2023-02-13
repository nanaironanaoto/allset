$('#conversionA').clone(true).appendTo('#getCloneA');


//ページ読み込み完了後にinview実行（load後にbind）
$(window).on('load', function () { //load後にbind
  $('.afterload_fadein01').on('inview', function () {
    $(this).css('opacity', '1.0');
  });
  $('.afterload_fadein02').on('inview', function () {
    $(this).css('opacity', '1.0');
  });
});

//inviewとanimateクラスライブラリ(animate.min.css)を使ってを使ってスクロールアニメーション
$(function () {
  $('.scrollfadein').on('inview', function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $(this).addClass('isShow');
    }
  });
});

$(function () {
  $('.border-bottom').on('inview', function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $(this).addClass('isShow');
    }
  });
});

//リスト要素が順番に表示される
var list_i = 0;
var list_int = 0;
$('#dominoFadeinList').on('inview', function () { //#dominoFadeinListまでスクロールされたら実行
  var list_int = setInterval("doFade(list_i)", 250);
});
function doFade() {
  var list = $('.dominoFade>ul>li').length;
  console.log(list);
  console.log(list_i);
  if (list_i >= list) {
    console.log('stop');
    clearInterval(list_int); //関数終了
  }
  $('.dominoFade>ul>li').eq(list_i).addClass('dominofadeIn');
  list_i++;
}

//パスワード認証 ( pass : test1234 )
document.body.style.display = 'none';
window.onload = function () {
  var UserInput = null;

  var cookies = document.cookie;
  var cookiesArray = cookies.split(';');
  var pass = 'dGVzdDEyMzQ=';

  for (var c of cookiesArray) {
    var cArray = c.split('=');
    if (cArray[0].indexOf('cruw-basic') > -1) {
      UserInput = decodeURIComponent(cArray[1]);
    }
  }
  if (!(UserInput && UserInput == window.atob(pass))) {
    UserInput = prompt("パスワードを入力して下さい:", "");
  }

  if (UserInput != window.atob(pass)) {
    document.body.innerHTML = "403 Forbidden";
  } else {
    var now = new Date();
    now.setMinutes(now.getMinutes() + 60 * 24 * 3);
    document.cookie = "cruw-basic=" + encodeURIComponent(UserInput) + ";expires=" + now.toUTCString() + "; path=/;";
  }
  document.body.style.display = null;
}
