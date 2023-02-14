$(function () {
  console.log('go');
  setTimeout(function () {
    $('.logo_frame_static').addClass('isShow');
  }, 3400);
});

// $(function () {
//   const opVideo = $('#logo_movie01').get(0);
//   opVideo.addEventListener('loadedmetadata', function () {
//     const playTime = opVideo.duration * 1000 + 500;
//     // 確認用
//     console.log('動画の時間（長さ）： ' + opVideo.duration);
//     console.log('動画の表示時間： ' + playTime);

//     setTimeout(function () {
//       //alert('test');
//       $('#logo_frame_static').addClass('isShow');
//     }, playTime);
//   });
// });

//jQueryを使ってスクロールアニメーション01
//const scrollNum = document.getElementById('scroll-num');

window.addEventListener('scroll', function () {
  console.log('scroll');
  console.log(scrollPosition);
  //console.log(objectTop03);

  if (scrollTop > objectTop02) {
    //console.log('over_bnr02');
    let scroll_stop_and_fade02 = (scrollTop / objectTop02) - 1;
    // console.log(scroll_stop_and_fade02);
    $('#vertical_textbox_bnr02').css('opacity', scroll_stop_and_fade02);
  }
  if (scrollTop > objectTop03) {
    //console.log('over_bnr03');
    let scroll_stop_and_fade03 = (scrollTop / objectTop03) - 0.75;
    //console.log(scroll_stop_and_fade03);
    $('#vertical_textbox_bnr03').css('opacity', scroll_stop_and_fade03);
  }
})

$('.logo_side_dog').hover(
  function () {
    //マウスカーソルが重なった時の処理
    $(this).attr('src', '../img/logo_side_dog_apng.png');
  },
  function () {
    //マウスカーソルが離れた時の処理
    $(this).attr('src', '../img/logo_side_dog.png');
  }
);

パスワード認証 ( pass : test1234 )
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

$(".scroll_container").scroll(function () {
  let scrollTop = $(".scroll_container").scrollTop(); // スクロール上部の位置
  let pc_bnr02_areaTop = $("#pc_bnr02").offset().top; // 対象エリアの上部の位置
  let pc_bnr03_areaTop = $("#pc_bnr03").offset().top; // 対象エリアの上部の位置
  let pc_bnr02_areaBottom = pc_bnr02_areaTop + $("#pc_bnr02").innerHeight(); // 対象エリアの下部の位置
  let pc_bnr03_areaBottom = pc_bnr03_areaTop + $("#pc_bnr02").innerHeight(); // 対象エリアの下部の位置

  if (scrollTop > pc_bnr02_areaTop && scrollTop < pc_bnr02_areaBottom) {
    console.log('pc_bnr02-in')
    //$("#pc_bnr02").addClass("isShow"); // スクロールが対象エリアに入った場合
    $('#pc_bnr02 .eachTextAnime').each(function () {
      $(this).addClass("appeartext");
    });
  }

  if (scrollTop > pc_bnr03_areaTop && scrollTop < pc_bnr03_areaBottom) {
    console.log('pc_bnr03-in')
    //$("#pc_bnr02").addClass("isShow"); // スクロールが対象エリアに入った場合
    $('#pc_bnr03 .eachTextAnime').each(function () {
      $(this).addClass("appeartext");
    });
  }

});
