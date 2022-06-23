var scrollAnimationElm = document.querySelectorAll('.sa');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
    else if(
        (window.innerHeight < scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin)
        &(scrollAnimationElm[i].classList.contains("show"))
    )
    {
        scrollAnimationElm[i].classList.remove('show')
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);