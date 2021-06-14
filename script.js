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
    noteNumber = document.createElement("span");
    noteNumber.innerText = "Note" + noteCount;
    noteText = document.createElement("span");
    noteText.innerText = noteList[arrIndex];
    viewButton = document.createElement("BUTTON");
    viewButton.innerText = "View Detail"

    noteElement.appendChild(noteNumber);
    noteElement.appendChild(noteText);
    noteElement.appendChild(viewButton);
    
    document.getElementById("row2").appendChild(noteElement);
    
}