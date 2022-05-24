const dreamsbef = document.querySelectorAll(".drawing-link");

let dreams
let c;

for (c=0; c<=dreamsbef.length; c++) {
dreamsbef.forEach(function (item, c) {
dreams = dreamsbef[c];

dreams.addEventListener("click", function() {
  $("#dreams-img-cntn").css("display","block");
  $("#dreams-img").attr("src","assets/img/" + (c+1) + ".png");
  $("#dreams-img").css("AnimationPlayState", "running");
  $(".dream").addClass("text-blur");

  setTimeout(function(){
$("#dreams-img-cntn").css("display", "none");
$(".dream").removeClass("text-blur");
$("#dreams-img").css("AnimationPlayState", "paused");
}, 3000);
})

})
}
