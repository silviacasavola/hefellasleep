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
  scroll = scroll1 + 2;

window.scrollTo({top: scroll, behavior: 'smooth'});
}, 50)

}
