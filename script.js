var noteList = [];
var note;
var noteElement;
var noteNumber;
var noteCount;
var noteText;
var arrIndex;
var viewButton;
var modalIndex;

function addNote (){ //Add note to list

    //Storing size of array and number of notes
    arrIndex = noteList.length;
    noteCount = noteList.length + 1;

    //Grabbing the contents of note and storing into variable
    note = document.getElementById("noteInput").value;
    
    //Appending inputted note to array
    noteList.push(note);

    //Creating a div element to append all elements too
    noteElement = document.createElement("div");
    noteElement.setAttribute("id", "column");

    //Creating a span element that includes the note number
    noteNumber = document.createElement("span");
    noteNumber.innerText = "Note " + noteCount;
    noteNumber.setAttribute("id", "noteNumber");

    //Creating a span element that includes the text of the note
    noteText = document.createElement("span");
    noteText.innerText = noteList[arrIndex];

    //Creating a button element that when clicked opens a modal
    viewButton = document.createElement("BUTTON");
    viewButton.innerText = "View Detail"
    viewButton.setAttribute("class", "viewButton");
    viewButton.setAttribute("id", "b" + arrIndex);
    viewButton.setAttribute("onclick", "viewNote(this.id)");

    //Appending all the elements to the noteElement div
    noteElement.appendChild(noteNumber);
    noteElement.appendChild(noteText);
    noteElement.appendChild(viewButton);
    
    //Appending noteElement div to row2
    document.getElementById("row2").appendChild(noteElement);
    
}

//Storing HTML elements into variables
var modal = document.getElementsByClassName("modal")[0];
var modalContent = document.getElementsByClassName("modal-content")[0];
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//Event listener for when the close button on modal clicked and when user clicks outside of modal
closeBtn.addEventListener("click", closeNote);
window.addEventListener("click", clickOutside)

function viewNote(clicked_id) { //Opens modal so can view note

    //Grabbing ID of the view button clicked and storing in variable
    modalIndex = clicked_id.slice(-1);

    //Creating a span element that includes the text of note viewed
    var modalText = document.createElement("span");
    modalText.setAttribute("id", modalIndex);
    modalText.setAttribute("class", "modalText");
    modalText.innerText = noteList[modalIndex];

    //Appending the text of note to modal
    modalContent.appendChild(modalText);

    //Show modal 
    modal.style.display = "block";
}

function closeNote() { //Close modal and remove it contents

    //Storing the span that needs to be removed and then removing it
    var modalRemove = document.getElementById(modalIndex);
    modalRemove.remove();

    //Hide modal
    modal.style.display = "none";
}

function clickOutside(e) { //Close modal if click outside of modal
    if(e.target == modal){ //If click on modal div then close modal

        //Storing the span that needs to be removed and then removing it
        var modalRemove = document.getElementById(modalIndex);
        modalRemove.remove();
        
        //Hide modal
        modal.style.display = "none";
    }
}
