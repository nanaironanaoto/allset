//flickity
jQuery(function ($) {
  $('#main-gallery').flickity({
    // ここでオプションを設定します。
    wrapAround: true,
    //　trueで無限スクロール。デフォルトはfalse。
    contain: true,
    //　trueでラッパー要素の中で収まるようにスクロールする。falseではみ出た部分に余白ができる。デフォルトはfalse。(wrapAround: trueの場合は無視される)
    cellAlign: 'center',
    // セルの基準値を'center','left','right'で指定する。デフォルトは'center'。
    draggable: true,
    // falseでドラッグやフリック操作が無効。デフォルトはtrue。
    rightToLeft: false,
    // trueでスライドの始まりが右になる。デフォルトはfalse。
    prevNextButtons: false,
    // falseで「前へ」「次へ」のボタンの非表示。デフォルトはtrue。
    pageDots: true,
    // falseでドットナビゲーションを非表示。デフォルトはtrue。
    reseze: true,
    // falseでリサイズした時にサイズ変更しない。デフォルトはtrue。
    autoPlay: true
    // trueで3秒間隔で自動スクロール。秒数を指定したい場合は1500などミリ秒で指定する。デフォルトはfalse。
  });
});

//ページ読み込み完了後にinview実行（load後にbind）
$(window).on('load', function () { //load後にbind
  $('.afterload_fadein_demo01').on('inview', function () {
    $(this).css('opacity', '1.0');
  });
});

//inviewを使わないでスクロールアニメーション
$(window).on('scroll', function () {
  var scroll_top = $(window).scrollTop();
  //console.log(scroll_top);
  $('.scrollfadein_demo01').each(function () {
    //var offset_top = $(this).offset().top - $(this).height();
    var offset_top = $(this).offset().top / 2;
    if (scroll_top > offset_top) {
      $(this).addClass('isShow');
    } else {
      $(this).removeClass('isShow');
    }
  });
});

//inviewとanimateクラスライブラリ(animate.min.css)を使ってを使ってスクロールアニメーション
$(function () {
  $('.box1').on('inview', function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $(this).addClass('fadeInDown');
    } else {
      //表示領域から出た時
      $(this).removeClass('fadeInDown');
      $(this).css('opacity', 0); //非表示にしておく
    }
  });
  $('.box2').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).addClass('bounceIn');
    } else {
      $(this).removeClass('bounceIn');
    }
  });
  $('.box3').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).addClass('lightSpeedIn');
    } else {
      $(this).removeClass('lightSpeedIn');
    }
  });
});

//画像ホバー時のズームエフェクト
$(function () {
  $('.zoom_img').hover(
    // マウスポインターが画像に乗った時の動作
    function (e) {
      $(this).css('transform', 'scale(1.05)');
    },
    // マウスポインターが画像から外れた時の動作
    function (e) {
      $(this).css('transform', 'scale(1)');
    }
  );
});

//遅延スクロール（パララックス）
$(window).on('load resize', function () {
  var winW = $(window).width();
  var devW = 767;
  if (winW <= devW) {
    //767px以下の時の処理
    $(function ($) {
      $(window).scroll(function () {
        var y = $(this).scrollTop();
        var parallax_obj01start = -100; //初期位置としてcustom.cssにも記述すること！
        var parallax_obj02start = -100; //初期位置としてcustom.cssにも記述すること！
        $('.parallax_obj01').css('bottom', parseInt(parallax_obj01start - y / -5) + 'px');
        $('.parallax_obj02').css('top', parseInt(parallax_obj02start - y / -10) + 'px');
      });
    });
  } else {
    //768pxより大きい時の処理
    $(function ($) {
      $(window).scroll(function () {
        var y = $(this).scrollTop();
        var parallax_obj01start = -100; //初期位置としてcustom.cssにも記述すること！
        var parallax_obj02start = -100; //初期位置としてcustom.cssにも記述すること！
        $('.parallax_obj01').css('bottom', parseInt(parallax_obj01start - y / -5) + 'px');
        $('.parallax_obj02').css('top', parseInt(parallax_obj02start - y / -10) + 'px');
      });
    });
  }
});

//タブ切り替え
$(function () {
  let tabs = $(".popular_area_tab"); // popular_area_tabのクラスを全て取得し、変数tabsに配列で定義
  $(".popular_area_tab:first-child").addClass("active");
  $(".popular_area_content:first-child").addClass("show");
  $(".popular_area_tab").on("click", function () { // popular_area_tabをクリックしたらイベント発火
    $(".active").removeClass("active"); // activeクラスを消す
    $(this).addClass("active"); // クリックした箇所にactiveクラスを追加
    const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
    $(".popular_area_content").removeClass("show tab_fadeInRight").eq(index).addClass("show tab_fadeInRight"); // showクラスを消して、popular_area_contentクラスのindex番目にshowクラスを追加
  })
})

//TOPページ専用スムーススクロール
// $(window).on('load resize', function(){
//   var winW = $(window).width();
//   var devW = 480;
//   if (winW <= devW) {
//     //480px以下の時の処理
// 	$(function(){
// 	  $('a[href^="#"]').click(function(){
// 	    let speed = 500;
// 	    let href= $(this).attr("href");
// 	    let target = $(href == "#" || href == "" ? 'html' : href);
// 	    let position = target.offset().top - 100;
// 	    $("html, body").animate({scrollTop:position}, speed, "swing");
// 	    return false;
// 	  });
// 	});
//   } else {
//     //480pxより大きい時の処理
// 	$(function(){
// 	  $('a[href^="#"]').click(function(){
// 	    let speed = 500;
// 	    let href= $(this).attr("href");
// 	    let target = $(href == "#" || href == "" ? 'html' : href);
// 	    let position = target.offset().top - 150;
// 	    $("html, body").animate({scrollTop:position}, speed, "swing");
// 	    return false;
// 	  });
// 	});
//   }
// });

//TOPページ以外でのスムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});


//コピーするボタンの設置
$(function () {
  $('#js-copybtn').on('click', function () {
    // コピーする文章の取得
    let text = $('#js-copytext').text();
    // テキストエリアの作成
    let $textarea = $('<textarea></textarea>');
    // テキストエリアに文章を挿入
    $textarea.text(text);
    //　テキストエリアを挿入
    $(this).append($textarea);
    //　テキストエリアを選択
    $textarea.select();
    // コピー
    document.execCommand('copy');
    // テキストエリアの削除
    $textarea.remove();
    // アラート文の表示
    $.when($('#js-copybtn').html('コピーしました！').delay(1000)).done(function () { $('#js-copybtn').html('コピー'); });
  });
});

//YouTubeなどのiframe動画の遅延読み込み
function youtube_defer() {
  var iframes = document.querySelectorAll('.youtube');
  iframes.forEach(function (iframe) {
    if (iframe.getAttribute('data-src')) {
      iframe.setAttribute('src', iframe.getAttribute('data-src'));
    }
  });
}
window.addEventListener('load', youtube_defer);

//ドロワーメニュー内のページ内リンクを押したらcssの:checkを外す
$(function () {
  $('#drawer-content a').click(function () {
    $('#drawer-checkbox').removeAttr('checked').prop('checked', false).change();
  });
});

//リスト要素が順番に表示される
var list_i = 0;
var list_int = 0;
$('#dominoFadeinList').on('inview', function () { //#dominoFadeinListまでスクロールされたら実行
  var list_int = setInterval("doFade(list_i)", 150);
});
function doFade() {
  var list = $('.dominoFade>ul>li').length;
  if (list_i >= list) {
    clearInterval(list_int); //関数終了
  }
  $('.dominoFade>ul>li').eq(list_i).addClass('fadeInRight');
  list_i++;
}

//順序を入れ替える
$(function () {
  $('#order_reverse_L').before($('#order_reverse_R'));
});

//inViewとanimateとSVGアニメーション開始を組み合わせる
$(function () {
  $('#svg_animation').on('inview', function (event, isInView) {
    if (isInView) {
      //表示領域に入った時
      $('.svg01').css('display', 'block');
    }
  });
});

//ポップアップウィンドウ
$(function () {
  $(".r18_overlay").show();
  $.cookie('r18btnFlg') == 'on' ? $(".r18_overlay").hide() : $(".r18_overlay").show();
  $(".r18_btn_area a").click(function () {
    $(".r18_overlay").fadeOut();
    $.cookie('r18btnFlg', 'on', { expires: 0, path: '/' }); //"#,path"の#がcookieの保存日数
  });
});

//ページ読み込み完了後にinview実行（load後にbind）
$(window).on('load', function () { //load後にbind
  $('.text_effect').on('inview', function () {
    $(this).children('p').addClass('animate');
    $(this).find('.over_color').addClass('animate');
  });
});
