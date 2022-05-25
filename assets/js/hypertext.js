let i;

// 1. GIULIETTA

let giulietta = $(".giulietta-link");

giulietta.click(function() {

  i = Math.floor(Math.random() * giulietta.length )

  $('html, body').animate({
  scrollTop: $(giulietta[i]).offset().top
})
$(giulietta[i]).addClass("hypertextanimation")
})


// 2. DEATH
let death = $(".death-link");

  death.click(function() {
  i = Math.floor(Math.random() * death.length )
  $('html, body').animate({
  scrollTop: $(death[i]).offset().top
})
$(death[i]).addClass("hypertextanimation")
})


// 3. BIRTH
let birth = $(".birth-link");

  birth.click(function() {
  i = Math.floor(Math.random() * birth.length )
  $('html, body').animate({
  scrollTop: $(birth[i]).offset().top
})
$(birth[i]).addClass("hypertextanimation")
})


// 4. MOVIES
let movies = $(".movies-link");

  movies.click(function() {
  i = Math.floor(Math.random() * movies.length )
  $('html, body').animate({
  scrollTop: $(movies[i]).offset().top
})
$(movies[i]).addClass("hypertextanimation")
})


// 5. PLACES
let places = $(".places-link");

  places.click(function() {
  i = Math.floor(Math.random() * places.length )
  $('html, body').animate({
  scrollTop: $(places[i]).offset().top
})
$(places[i]).addClass("hypertextanimation")
})


// 6. FAMOUS
let famous = $(".famous-link");

  famous.click(function() {
  i = Math.floor(Math.random() * famous.length )
  $('html, body').animate({
  scrollTop: $(famous[i]).offset().top
})
$(famous[i]).addClass("hypertextanimation")
})


// 7. BETRAYAL
let betrayal = $(".betrayal-link");

  betrayal.click(function() {
  i = Math.floor(Math.random() * betrayal.length )
  $('html, body').animate({
  scrollTop: $(betrayal[i]).offset().top
})
$(betrayal[i]).addClass("hypertextanimation")
})
