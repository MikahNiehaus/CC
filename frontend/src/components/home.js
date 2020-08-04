document.addEventListener("DOMContentLoaded", function () {
  console.log("Starting Up!")
  //The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
  const subjects = new SubjectsAdapter();
  subjects.getSubjects();
  greet();
});


function openCCFunction() {
  if (document.getElementById("container").value == "") {
    alert('Please select somthing.');
    return;
  }
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const x = document.getElementById("container").selectedIndex;
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const y = document.getElementById("container").options;
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("cc-body").value = "";
  let id = y[x].id;
  const notes = new NotesAdapter();
  notes.getNotes(id);
}

function addCCFunction() {
  if (document.getElementById("container").value == "") {
    alert('Please select somthing.');
    return;
  }
  //gets all the text i need
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  let cc_body = document.getElementById("cc-body").value;
  //now I'm going to edit the body
  cc_body = editBody(cc_body);
  //now im going to copy the text to clipboard
  copyStringToClipboard(cc_body);
  //add it to text
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const x = document.getElementById("container").selectedIndex;
 
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const y = document.getElementById("container").options;
  let id = y[x].id;
  //const y = document.getElementById("edit-subject-body").value;
  const notes = new NotesAdapter();
  notes.createNote(cc_body, id);
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("cc-body").value = "";
  say("CC added!")
}


const subjectButton = document.querySelector('#subjectButton');
const btnRemove = document.querySelector('#btnRemove');
const subject_body = document.querySelector('#subject-body');

subjectButton.onclick = (e) => {
  e.preventDefault();
  // validate the option
  if (subject_body.value == '') {
    alert('Please enter the subject name.');
    return;
  }
  if (!document.querySelector('#cc-body').value == "") {
    alert('Remember to add the CC.');
  }
  const subjects = new SubjectsAdapter();
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  subjects.createSubject(document.getElementById("subject-body").value);
  document.getElementById("subject-body").value = "";
  say("Subject Created!")
};

// remove selected option
btnRemove.onclick = (e) => {
  e.preventDefault();
  const selector = document.getElementById('container');
  if (selector.selectedIndex == -1) {
    alert('Please select somthing.');
    return;
  }
// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const id = selector[selector.selectedIndex].id;
  const subjects = new SubjectsAdapter();
  subjects.deleteSubject(id);
  say("Subject Deleted!")
};


function onContainerClick() {
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const x = document.getElementById("container").selectedIndex;
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const y = document.getElementById("container").options;
  let subject_body = y[x].text;
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("edit-subject-body").value = subject_body;
}


function EditSubjectFunction() {
  
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const selector = document.getElementById("container");
  if (selector.value == "") {
    alert('Please select somthing.');
    return;
  }
  const id = selector[selector.selectedIndex].id;
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const y = document.getElementById("edit-subject-body").value;
  const subjects = new SubjectsAdapter();
  subjects.updateSubject(y, id);
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("edit-subject-body").value = "";
  say("Subject Edited!")
}