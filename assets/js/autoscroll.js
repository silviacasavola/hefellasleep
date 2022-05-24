let a=2;
history.scrollRestoration = "manual";
$(window).on('beforeunload', function(){
  $("body").scrollTop(0);
})

$(window).load(function() {
setTimeout(startscrolling, 3000)
})

function startscrolling () {

setInterval(
function addScroll () {
let  scroll1 = $(window).scrollTop();
  scroll = scroll1 + a;

window.scrollTo({top: scroll, behavior: 'smooth'});
}, 40)

}

document.addEventListener('mousedown', e => {
a=0
});
document.addEventListener('mouseup', e => {
  setTimeout(keepScrolling,1000)

  });

  document.addEventListener('wheel', e => {
    a=0
    setTimeout(keepScrolling,1000)
    });
 function keepScrolling(){
   a=1
 }
