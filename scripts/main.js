// nav bar responsive code
function myFunction() {
  var x = document.getElementById("myTopnav");
  var images = document.getElementById("sliderSec");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
  //if (images.className === "sliderImages"){
    // images.className+=" imagesSmallScreen";
     //}else{
      //  x.className = "sliderSec";
  //}
}