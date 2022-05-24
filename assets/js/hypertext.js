let i;

// 1. GIULIETTA

let giulietta = $(".giulietta-link");

// for (i = 1; i <= giulietta.length; i++) {
  // giulietta = giulietta[i];
  giulietta.click(function() {
  // console.log($(this).index())

  i = Math.floor(Math.random() * giulietta.length )
  console.log(i)

  $('html, body').animate({
  scrollTop: giulietta[i]
})
console.log("sono giulietta")
})


// 2. DEATH
let death = $(".death-link");

  death.click(function() {
  i = Math.floor(Math.random() * death.length )
  $('html, body').animate({
  scrollTop: death[i]
})
console.log("sono la morte")
})


// 3. BIRTH
let birth = $(".birth-link");

  birth.click(function() {
  i = Math.floor(Math.random() * birth.length )
  $('html, body').animate({
  scrollTop: birth[i]
})
console.log("sono rinata")
})


// 4. MOVIES
let movies = $(".movies-link");

  movies.click(function() {
  i = Math.floor(Math.random() * movies.length ) 
  $('html, body').animate({
  scrollTop: movies[i]
})
console.log("sono un film")
})


// 5. PLACES
let places = $(".places-link");

  places.click(function() {
  i = Math.floor(Math.random() * places.length ) 
  $('html, body').animate({
  scrollTop: places[i]
})
console.log("sono un luogo")
})


// 6. FAMOUS
let famous = $(".famous-link");

  famous.click(function() {
  i = Math.floor(Math.random() * famous.length ) 
  $('html, body').animate({
  scrollTop: famous[i]
})
console.log("sono famosa")
})


// 7. BETRAYAL
let betrayal = $(".betrayal-link");

  betrayal.click(function() {
  i = Math.floor(Math.random() * betrayal.length ) 
  $('html, body').animate({
  scrollTop: betrayal[i]
})
console.log("sono cornuta")
})
