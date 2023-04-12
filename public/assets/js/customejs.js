document.addEventListener('load' , count())
document.querySelector('.btn').addEventListener('click', count)  

function count() {
  document.querySelectorAll('.data-number').forEach((e) => {
    var currentNumber = 0
    var finalNumber = e.getAttribute('data-number')
    finalNumber = parseInt(finalNumber)
    var delay

    switch(true) {
    case (finalNumber < 20):
      delay = 30
      break
    case (finalNumber < 20):
      delay = 30
      break
    case (finalNumber < 20):
      delay = 30
      break
    default:
      delay = 30
      break
    }

    var increment = setInterval(() => {
      e.innerHTML = currentNumber
      if (currentNumber < finalNumber) {
        if(finalNumber > 1000) {
          currentNumber += 100
        } else {
          currentNumber++
        }
      } else {
        clearInterval(increment)
      }
    }, delay)
    increment
  })
}
// jQuery(document).on('click', '.faq-inner-wrapper a' ,function() {
// ​
//   jQuery(this).find('.fa-plus').toggleClass('fa-minus');
// ​
// });
// ​
// $(document).ready(function(){
//   $('.menu-tab').click(function(){
//     $('.menu-hide').toggleClass('show');
//     $('.menu-tab').toggleClass('active');
//   });
//   $('a').click(function(){
//     $('.menu-hide').removeClass('show');
//     $('.menu-tab').removeClass('active');
//   });
// });
// Add active class to the current button (highlight it)
var i = 0;
document.querySelectorAll('ul.nav > li > a').forEach((nav) => {
    console.log({
      navPathname: nav.pathname,
      windowLocationPathname: window.location.pathname,
      areEqual: nav.pathname === window.location.pathname,
    });
  if (nav.pathname === window.location.pathname) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
})