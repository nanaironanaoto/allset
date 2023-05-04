/*-------------------------------------
  パララックスアニメーション
-------------------------------------*/
window.addEventListener('DOMContentLoaded', function () {

  // 画像自体を移動
  gsap.fromTo('.parallax-image', { y: 100 }, {
    y: -100, scrollTrigger: {
      trigger: '.parallax-sec',
      start: 'top bottom',
      end: 'top top',
      scrub: 1,
    }
  })

  // ぼかしからくっきりと
  gsap.fromTo('.parallax-image', { filter: 'blur(10px)' }, {
    filter: 'blur(0px)', scrollTrigger: {
      trigger: '.parallax-sec',
      start: 'top bottom',
      end: 'top center',
      scrub: 1,
    }
  })
})
