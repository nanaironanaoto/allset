/*-------------------------------------
  パララックスアニメーション
-------------------------------------*/
window.addEventListener('DOMContentLoaded',function(){

  // 画像自体を移動
  gsap.fromTo('.glitch-image',{y:100},{y:-100,scrollTrigger:{
    trigger:'.glitch-sec',
    start:'top bottom',
    end:'top top',
    scrub:1,
  }})

  // ぼかしからくっきりと
  gsap.fromTo('.glitch-image',{filter:'blur(10px)'},{filter:'blur(0px)',scrollTrigger:{
    trigger:'.glitch-sec',
    start:'top bottom',
    end:'top center',
    scrub:1,
  }})
})