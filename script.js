var halloween = new Date("Oct 31, 2019 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = halloween - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("timer").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds ";
if (distance <= 0) {
  document.getElementById("timer").innerHTML = "HAPPY HALLOWEEN!"
}
})
