//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
puzzleBoard = document.querySelector(".puzzle-board"),
puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
puzzlePiecesDiv = document.querySelectorAll(".puzzle-pieces"),
dropZones = document.querySelectorAll(".drop-zone");
//store the dragged piece in a gloabl variable
//we will need iy in the handleDrop function


function changeBGImage() {
    //console.loSg("changeBGImage called");
    //url('../images/backGround0.jpg);

    //bug fix 2 will go here
    //will use a forEach loop and if statement
    //i want to loop through dropzones and check if there is?
    //check with firstChild
    //if there is a child
    //puzzlePiecesDiv.appendChild(something needs to go here)

    //alternate vway of doing thisw
    puzzleBoard.computedStyleMap.backgroundImage =`url(images/backGround${this.dataset.bgref}.jpg)`

    //puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}
function handleStartDrag(e) {
    //console.log("Started dragging this piece:", this)
    //using set data instead of global variable
    e.DataTransfer.setData('draggedEl', thisEl);
}
function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour 
    //e is short for event, could be e evt as well
    console.log("dragged over me");
}
function handleDrop (e) {
    e.preventDefault();
    console.log("dropped something on me");
    //this line moves the dragged piece from the left side of the board into whatever dropzone we choose

    //bug fix 1 will go here
    //can also check if there are no children
    if(this.children.length >=1)  {
        return;
    }
    //this is another alternate way to using setData and getData methods
    //this allows us to pass info from a dragged item
    let droppedId = e.dataTransfer.getData('draggedEl');
    console.log(droppedId);
    //this.appendChild(document.querySelector(droppedId));p
    this.appendChild(document.querySelector(`#${droppedId}`));

}

//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece=> piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone=>zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone=> zone.addEventListener("drop", handleDrop));