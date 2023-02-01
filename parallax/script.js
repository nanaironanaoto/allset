//jQueryを使ってスクロールアニメーション01
//const scrollNum = document.getElementById('scroll-num');

window.addEventListener('scroll', function () {
  //scrollNum.textContent = window.pageYOffset;
  // console.log(window.pageYOffset);
  let scrollTop = $(window).scrollTop()

  let objectTop02 = $('#pc_bnr02').offset().top;
  let objectTop03 = $('#pc_bnr03').offset().top;

  //console.log(scrollTop);
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
