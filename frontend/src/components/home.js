// #####NOTES#####
//#const
// The keyword const does NOT define a constant value. It defines a constant reference to a value.
// Because of this, we cannot change constant primitive values, but we can change the properties of constant objects. (Array example)
//#new/instance
// An “instance” means a reference to an “object” created by “new” or the equivalent.
//#functiuon
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,
//  but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious
//   relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
//#AJAX?
// AJAX = Asynchronous JavaScript And XML.
// AJAX is not a programming language.

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
  //copyStringToClipboard(cc_body);
  //add it to text
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const x = document.getElementById("container").selectedIndex;
 
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  const y = document.getElementById("container").options;
  let id = y[x].id; //0
  //const y = document.getElementById("edit-subject-body").value;
  const notes = new NotesAdapter();
  notes.createNote(cc_body, id);
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("cc-body").value = "";
  const speek = new Speek("CC added!");
  speek.render();
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
  const speek = new Speek("Subject Created!");
  speek.render();
 // subjects.getSubjects();
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
  const speek = new Speek("Subject Deleted!");
  speek.render();
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
  const speek = new Speek("Subject Edited!");
  speek.render();
 
}

class Speek {
 // A class is a type of function, but instead of using the keyword function to initiate it,
 // we use the keyword class, and the properties are assigned inside a constructor() method.
  constructor(text){
    // this refers to the global object whether in strict mode or not.
    this.text = text;
  //   The constructor method is special, it is where you initialize properties, 
  //   it is called automatically when a class is initiated, and it has to have the exact name "constructor", 
  //   in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.
  }
// Adding a method to the constructor
  render(){
      console.log("Somthing has been sayed")
      // this refers to the global object whether in strict mode or not.
      let say = this.text;
      document.getElementById("info").innerHTML = say;
      //asyncronis
      setTimeout(function(){
   greet();
      }, 3000);
      return (say)
    }


}