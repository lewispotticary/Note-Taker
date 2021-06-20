var noteList = [];
var note;
var noteElement;
var noteNumber;
var noteCount;
var noteText;
var arrIndex;
var viewButton;

function addNote (){

    arrIndex = noteList.length;
    noteCount = noteList.length + 1;

    note = document.getElementById("noteInput").value;
    
    noteList.push(note);

    noteElement = document.createElement("div");
    noteElement.setAttribute("id", "column");
    noteNumber = document.createElement("span");
    noteNumber.innerText = "Note " + noteCount;
    noteNumber.setAttribute("id", "noteNumber");
    noteText = document.createElement("span");
    noteText.innerText = noteList[arrIndex];
    viewButton = document.createElement("BUTTON");
    viewButton.innerText = "View Detail"
    viewButton.setAttribute("class", "viewButton");
    viewButton.setAttribute("id", arrIndex);
    viewButton.setAttribute("onclick", "viewNote(this.id)");

    noteElement.appendChild(noteNumber);
    noteElement.appendChild(noteText);
    noteElement.appendChild(viewButton);
    
    document.getElementById("row2").appendChild(noteElement);
    
}

var modal = document.getElementsByClassName("modal")[0];
var modalContent = document.getElementsByClassName("modal-content")[0];
var closeBtn = document.getElementsByClassName("closeBtn")[0];

closeBtn.addEventListener("click", closeNote);
window.addEventListener("click", clickOutside)

function viewNote(clicked_id) {
    var modalIndex = clicked_id;
    console.log(modalIndex);
    var modalText = document.createElement("span");
    modalText.setAttribute("id", "modalText");
    modalText.innerText = noteList[modalIndex];
    modalContent.appendChild(modalText);
    modal.style.display = "block";
}

function closeNote() {
    var modalRemove = document.getElementById("modalText");
    modalContent.removeChild(modalRemove);
    modal.style.display = "none";
}

function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = "none";
    }
}
