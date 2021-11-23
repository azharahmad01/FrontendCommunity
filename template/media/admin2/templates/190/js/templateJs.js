
function fixedFunction(x) {
  if (x.matches) {
    let fixedCol = document.getElementById("fixed-col");
    let fixedContainerCol = document.getElementById("fixed-container");
    let belowContainerCol = document.getElementById("below-container");
    let heightFixedCol = fixedCol.offsetHeight;
    console.log(heightFixedCol);
    $(window).scroll(function () {
      console.log(fixedContainerCol.getBoundingClientRect().top);
      console.log(belowContainerCol.getBoundingClientRect().top);
      let distanceTopFixed = fixedContainerCol.getBoundingClientRect().top;
      let distanceTopBelow = belowContainerCol.getBoundingClientRect().top;
      if (distanceTopFixed <= 0) {
        fixedCol.style.position = "fixed";
        fixedCol.style.right = "0px";
        fixedCol.style.top = "0px";
        fixedCol.style.setProperty("left", "initial");
      } else {
        fixedCol.style.position = "absolute";
        fixedCol.style.left = "0px";
        fixedCol.style.top = "0px";
        fixedCol.style.right = "0px";
      }

      if (distanceTopBelow <= heightFixedCol) {
        fixedCol.style.position = "absolute";
        fixedCol.style.bottom = "0px";
        fixedCol.style.right = "0px";
        fixedCol.style.left = "0px";
        fixedCol.style.setProperty("top", "initial");
      }
    });
  }
}

let query1 = window.matchMedia("(min-width:768px)");

fixedFunction(query1);

query1.addListener(fixedFunction);
