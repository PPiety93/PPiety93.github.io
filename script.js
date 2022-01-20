
// fuction for the icon when the screen is small, instead of display the topnav horizontal, now it is in a icon, dropdown menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
