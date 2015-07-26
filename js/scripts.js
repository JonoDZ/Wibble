

  var imageChildren = document.getElementById("list").childElementCount;


var mouseAlignEl = 0;

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var mouseX = 0
var mouseY = 0

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
   // grab the x-y pos
    mouseX = e.pageX
    mouseY = e.pageY
  

    document.getElementById("list").children[15].style.marginLeft = String(mouseX) + "px";
    
    mouseAlignEl = 15;

    for (var i = 1; i < 9; i++) {
      document.getElementById("list").children[mouseAlignEl + i].style.marginLeft = String(mouseX - i) + "px";
    }

    for (var i = 8; i > 0; i--) {
      document.getElementById("list").children[mouseAlignEl - i].style.marginLeft = String(mouseX - i) + "px";
    }


  if (mouseY < 0){mouseY = 0}  

 
  return true


}

