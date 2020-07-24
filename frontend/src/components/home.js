

document.addEventListener("DOMContentLoaded", function () {
  console.log("Starting Up!")
  const subjects = new SubjectsAdapter();
  subjects.getSubjects();

  greet();

});


function openCCFunction() {
  const x = document.getElementById("container").selectedIndex;
  const y = document.getElementById("container").options;
  document.getElementById("cc-body").value = "";
  let id = y[x].id;
  const notes = new NotesAdapter();
  notes.getNotes(id);
}

function addCCFunction() {
  //gets all the text i need
  //const subject_body = document.getElementById("subject-body").value;
  let cc_body = document.getElementById("cc-body").value;
  //now I'm going to edit the body
  cc_body = editBody(cc_body);
  //now im going to copy the text to clipboard
  copyStringToClipboard(cc_body);
  //add it to text


  const x = document.getElementById("container").selectedIndex;
  const y = document.getElementById("container").options;
  let id = y[x].id;
  //const y = document.getElementById("edit-subject-body").value;
  const notes = new NotesAdapter();
  notes.createNote(cc_body, id);
  document.getElementById("cc-body").value = "";
  say("CC added!")
}


const subjectButton = document.querySelector('#subjectButton');
const btnRemove = document.querySelector('#btnRemove');
//const sb = document.querySelector('#list');
const subject_body = document.querySelector('#subject-body');

subjectButton.onclick = (e) => {
  e.preventDefault();

  // validate the option
  if (subject_body.value == '') {
    alert('Please enter the subject name.');
    return;
  }

  const subjects = new SubjectsAdapter();
  subjects.createSubject(document.getElementById("subject-body").value);
  document.getElementById("subject-body").value = "";
  // location.reload();
  say("Subject Created!")
};

// remove selected option
btnRemove.onclick = (e) => {
  e.preventDefault();

  const x = document.getElementById("container").value;
  const subjects = new SubjectsAdapter();
  subjects.deleteSubject(x);
  //  location.reload();
  say("Subject Deleted!")
};


function onContainerClick() {
  const x = document.getElementById("container").selectedIndex;
  const y = document.getElementById("container").options;
  let subject_body = y[x].text;
  document.getElementById("edit-subject-body").value = subject_body;
}


function EditSubjectFunction() {
  const x = document.getElementById("container").value;
  const y = document.getElementById("edit-subject-body").value;
  const subjects = new SubjectsAdapter();
  subjects.updateSubject(y, x);
  document.getElementById("edit-subject-body").value = "";
  say("Subject Edited!")
}