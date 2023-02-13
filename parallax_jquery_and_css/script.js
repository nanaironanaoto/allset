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
