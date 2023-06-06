//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
puzzleBoard = document.querySelector(".puzzle-board"),
puzzlePieces = document.querySelectorAll(".puzzle-pieces img")
//console.log(theButtons);
//console.log(puzzleBoard);

function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg);
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}
function handleStartDrag(){
    console.log("Started dragging this piece:", this)
}


//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece=> piece.addEventListener("dragstart", handleStartDrag));
