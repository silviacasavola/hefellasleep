
let filteropen = false;

$( ".filterbutton" ).click(function() {
  if (filteropen === false) {
  $(".filter").css("display","flex");
  filteropen = true;
}
else if (filteropen === true) {
$(".filter").css("display","none");
filteropen = false;
}
});

document.getElementById('famous-filter').addEventListener('click', displayFamous);
document.getElementById('famous-filter').addEventListener('touchstart', displayFamous);


function displayFamous() {
$(".dream").css("display", "none");
$(".famous-text").css("display", "block");
$(".filter-link").removeClass("filter-active");
$("#famous-filter").addClass("filter-active");

scrolltotop();
}

$( "#giulietta-filter" ).click(function() {
$(".dream").css("display", "none");
$(".giulietta-text").css("display", "block");
$(".filter-link").removeClass("filter-active");
$("#giulietta-filter").addClass("filter-active");

scrolltotop();
})

$( "#death-filter" ).click(function() {
$(".dream").css("display", "none");
$(".death-text").css("display", "block");
$(".filter-link").removeClass("filter-active");
$("#death-filter").addClass("filter-active");

scrolltotop();
})

$( "#birth-filter" ).click(function() {
$(".dream").css("display", "none");
$(".birth-text").css("display", "block");
$(".filter-link").removeClass("filter-active");
$("#birth-filter").addClass("filter-active");

scrolltotop();
})

$( "#movies-filter" ).click(function() {
$(".dream").css("display", "none");
$(".movies-text").css("display", "block");
$(".filter-link").removeClass("filter-active");
$("#movies-filter").addClass("filter-active");

scrolltotop();
})

$( "#places-filter" ).click(function() {
$(".dream").css("display", "none");
$(".places-text").css("display", "block");
$(".filter-link").removeClass("filter-active");
$("#places-filter").addClass("filter-active");

scrolltotop();
})

$( "#betrayal-filter" ).click(function() {
$(".dream").css("display", "none");
$(".betrayal-text").css("display", "block");
$(".filter-link").removeClass("filter-active");
$("#betrayal-filter").addClass("filter-active");

scrolltotop();
})

$( "#reset-filter" ).click(function() {
$(".dream").css("display", "block");
$(".filter-link").removeClass("filter-active");

scrolltotop();
})

function scrolltotop () {
    $("body").scrollTop(0);
}
