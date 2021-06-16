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
    viewButton.setAttribute("id", "viewButton");
    viewButton.setAttribute("onclick", "viewNote()");

    noteElement.appendChild(noteNumber);
    noteElement.appendChild(noteText);
    noteElement.appendChild(viewButton);
    
    document.getElementById("row2").appendChild(noteElement);
    
}

function viewNote() {
    console.log("hello");
    //Modal box
}