// #####NOTES#####
//#new/instance
// An “instance” means a reference to an “object” created by “new” or the equivalent.
//#functiuon
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,
//  but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious
//   relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
//#AJAX?
// AJAX = Asynchronous JavaScript And XML.
// AJAX is not a programming language.
// rquest to server without reloading

document.addEventListener("DOMContentLoaded", function () {
  console.log("Starting Up!")
  //A Brand New instance of Object Gets Created called subjects
  //creates Variable defined with const (It defines a constant reference to a value.)
  const subjects = new SubjectsAdapter();
  //calls object method getSubjects()
  subjects.getSubjects(); //updates the subjects
  //calls function greet()
  greet(); //it will say a greating dependent on time of day
});


function openCCFunction() {
  // (if) to specify a block of code to be executed, if a specified condition is true
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  if (document.getElementById("container").value == "")//makes sure that i am selecting somthing
   {
    alert('Please select somthing.');
    return;//exists the openCCFunction() function
  }
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  //creates Variable defined with const (It defines a constant reference to a value.)
  const x = document.getElementById("container").selectedIndex; // gets the selected item num
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
   //creates Variable defined with const (It defines a constant reference to a value.)
  const y = document.getElementById("container").options;// gets the container options
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("cc-body").value = ""; // clears cc text
  //creates Variable defined with let (let variables can be reassigned)
  let id = y[x].id; //gets id of selected option
  //creates Variable defined with const (It defines a constant reference to a value.)
  //A Brand New instance of Object Gets Created
  const notes = new NotesAdapter(); //news up NotesAdapter()
  notes.getNotes(id);//calls object method
}

function addCCFunction() {
  // (if) to specify a block of code to be executed, if a specified condition is true
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  if (document.getElementById("container").value == "")//makes sure that i am selecting somthing
   {
    alert('Please select somthing.');
    return;//exists the function addCCFunction()
  }
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  //creates Variable defined with let (let variables can be reassigned)
  let cc_body = document.getElementById("cc-body").value;//gets cc text bar txt
 //calls function
  cc_body = editBody(cc_body);  //now I'm going to edit the body
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  //creates Variable defined with const (It defines a constant reference to a value.)
  const x = document.getElementById("container").selectedIndex;//gets the selected item num
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  //creates Variable defined with const (It defines a constant reference to a value.)
  const y = document.getElementById("container").options;//gets options
  //creates Variable defined with let (let variables can be reassigned)
  let id = y[x].id; //gets selected option by index
  //A Brand New instance of Object Gets Created
  //creates Variable defined with const (It defines a constant reference to a value.)
  const notes = new NotesAdapter(); //news up NotesAdapter()
  notes.createNote(cc_body, id); //calls object method
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("cc-body").value = "";
  //creates Variable defined with const (It defines a constant reference to a value.)
  //A Brand New instance of Object Gets Created
  const speek = new Speek("CC added!");// just says the text
  speek.render(); //calls object method
}

// The Document method querySelector() returns the first Element within the document that matches the specified selector,
//  or group of selectors. If no matches are found, null is returned.
//creates Variable defined with const (It defines a constant reference to a value.)
  const subjectButton = document.querySelector('#subjectButton');//stuff im going to use in subjectButton.onclick
const btnRemove = document.querySelector('#btnRemove');
const subject_body = document.querySelector('#subject-body');
//The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled
subjectButton.onclick = (e) => {
  e.preventDefault(); //creates subject
  // (if) to specify a block of code to be executed, if a specified condition is true
  if (subject_body.value == '')// has subject name
   {
    alert('Please enter the subject name.');
    return; //exits 
  }
  // (if) to specify a block of code to be executed, if a specified condition is true
  if (!document.querySelector('#cc-body').value == "") // reminder to add cc
   {
    alert('Remember to add the CC.');
  }
  //creates Variable defined with const (It defines a constant reference to a value.)
  //A Brand New instance of Object Gets Created
  const subjects = new SubjectsAdapter();// news up SubjectsAdapter()
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  subjects.createSubject(document.getElementById("subject-body").value); //calls object method
   // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("subject-body").value = "";//clears subject-body
  //creates Variable defined with const (It defines a constant reference to a value.)
  //A Brand New instance of Object Gets Created
  const speek = new Speek("Subject Created!"); //just speaks text
  speek.render();//calls object method
 // subjects.getSubjects();
};

   //The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled
btnRemove.onclick = (e) => {
  e.preventDefault();// remove selected option
  //creates Variable defined with const (It defines a constant reference to a value.)
  const selector = document.getElementById('container'); //gets contaner
  if (selector.selectedIndex == -1) //is selected
  {
    alert('Please select somthing.');
    return;//exit
  }
// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  //creates Variable defined with const (It defines a constant reference to a value.)
  const id = selector[selector.selectedIndex].id; //gets selected id
  //creates Variable defined with const (It defines a constant reference to a value.)
  //A Brand New instance of Object Gets Created
  const subjects = new SubjectsAdapter();//news up
  //calls object method
  subjects.deleteSubject(id);//delets by id
  //creates Variable defined with const (It defines a constant reference to a value.)
  //A Brand New instance of Object Gets Created
  const speek = new Speek("Subject Deleted!");
  //calls object method
  speek.render();// speeks
};

//upddats the edit text
function onContainerClick() {
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  //creates Variable defined with const (It defines a constant reference to a value.)
  const x = document.getElementById("container").selectedIndex;
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  //creates Variable defined with const (It defines a constant reference to a value.)
  const y = document.getElementById("container").options;
  let subject_body = y[x].text;
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("edit-subject-body").value = subject_body;
}


function EditSubjectFunction() {
  
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  //creates Variable defined with const (It defines a constant reference to a value.)
  const selector = document.getElementById("container");
  if (selector.value == "") {
    alert('Please select somthing.');
    return;
  }
  //creates Variable defined with const (It defines a constant reference to a value.)
  const id = selector[selector.selectedIndex].id;
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  //creates Variable defined with const (It defines a constant reference to a value.)
  const y = document.getElementById("edit-subject-body").value;
  //creates Variable defined with const (It defines a constant reference to a value.)
  //A Brand New instance of Object Gets Created
  const subjects = new SubjectsAdapter();
  if (y == "") {
    alert('Please enter somthing.');
    return;
  }
  subjects.updateSubject(y, id); //calls object method
  // The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.
  document.getElementById("edit-subject-body").value = "";
  //creates Variable defined with const (It defines a constant reference to a value.)
  //A Brand New instance of Object Gets Created
  const speek = new Speek("Subject Edited!");
  speek.render();//calls object method
 
}

//will speek stuff
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
   greet(); //it will say a greating dependent on time of day
      }, 3000);
      return (say)
    }


}