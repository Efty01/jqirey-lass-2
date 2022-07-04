$(function(){
  // scroll fixed

  $(window).scroll(function(){
    let scrTop = $(window).scrollTop();
    console.log(scrTop); 
    if (scrTop >= 130) {
      $('nav').addClass('menuFixed');
    }
    else {
      $('nav').removeClass('menuFixed');
    }
  });
  
  // preloader 

  

});

window.addEventListener('load', function(){
  document.querySelector('.preloader').style.display = 'none';
});