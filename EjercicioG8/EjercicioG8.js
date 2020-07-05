function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X: " + x + ", Y: " + y;
    document.getElementById("mouse").innerHTML = coor;
}

function clearCoor() {
    document.getElementById("mouse").innerHTML = "";
}