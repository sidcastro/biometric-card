$(document).foundation()

function myFunction() {
  var elements = ["myDIV1", "myDIV2", "myDIV3", "myDIV4", "myDIV5"];

  for(i = 0; i < elements.length; i++) {
    var x = document.getElementById(elements[i]);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}
