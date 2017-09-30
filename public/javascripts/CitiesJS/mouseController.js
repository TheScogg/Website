//Returns object with X & Y coordinates of mouse click
function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;
    var coords = {};

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    console.log(this);
    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;
    coords = {x:canvasX, y:canvasY};

    return coords;
}
