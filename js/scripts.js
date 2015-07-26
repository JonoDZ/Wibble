

var imageCount = document.getElementById("list").childElementCount;
var listCss = document.getElementById("list");
var listMargin = document.defaultView.getComputedStyle(listCss, null).getPropertyValue('margin-left');
var imageHeight = 1;
var targetEl = 0;
var baseMovement = .1;
var baseMultiplier = 1;
var NumOfImgsToRipple = 40;

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var mouseX = 0
var mouseY = 0


// Main function to retrieve mouse x-y pos.s
function getMouseXY(e) {

    //negitive value capture
    if (mouseY < 0){mouseY = 0}  
    if (mouseX < 0){mouseX = 0}

    //get mouse X position, create a 'white space' between mouse and area of effect
    mouseX = e.pageX - parseInt(listMargin) + 10;
    //get mouse Y position
    mouseY = e.pageY;
   
    //Calculate the X/Y axis motion of the images
    moveImages(mouseX, Math.round(mouseY / imageHeight));

  return true


}

function moveImages (mouseXpos, imageToMove) {

      //set target image to move in relation to the mouse
    document.getElementById("list").children[imageToMove].style.marginLeft = String(mouseXpos) + "px";
    
    //simulates target child
    var ImagesAfterRipple = imageToMove + NumOfImgsToRipple + 1;

    //adjust alignment of images below the Target image
    for (var i = 0; i < NumOfImgsToRipple; i++) {

      var amountToMove = String(mouseXpos - Math.pow(i * baseMovement, 2)) + "px";
      document.getElementById("list").children[imageToMove + i].style.marginLeft = amountToMove;
    }
    //adjust alignment of images above the Target image
    for (var i = NumOfImgsToRipple; i > 0; i--) {

      var amountToMove = String(mouseXpos - Math.pow(i * baseMovement, 2)) + "px";
      document.getElementById("list").children[imageToMove - i].style.marginLeft = amountToMove;
    }

    var lastRippleMargin = document.getElementById("list").children[imageToMove + NumOfImgsToRipple].style.marginLeft;

    for (ImagesAfterRipple; ImagesAfterRipple < (imageCount - 1); ImagesAfterRipple++){
      document.getElementById("list").children[ImagesAfterRipple].style.marginLeft = lastRippleMargin; 
    }

}