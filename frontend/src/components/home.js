

document.addEventListener("DOMContentLoaded", function () {
  console.log("Starting Up!")

  const subjects = new Subjects();

  subjects.getSubjects(); //updates the subjects
 
  greet(); //it will say a greating dependent on time of day
});


function openCCFunction() {
  
   
  if (document.getElementById("container").value == "")//makes sure that i am selecting somthing
   {
    alert('Please select somthing.');
    return;//exists the openCCFunction() function
  }
   
  
  const x = document.getElementById("container").selectedIndex; // gets the selected item num
   
   
  const y = document.getElementById("container").options;// gets the container options
   
  document.getElementById("cc-body").value = ""; // clears cc text
  //creates Variable defined with let (let variables can be reassigned)
  let id = y[x].id; //gets id of selected option
  
  //A Brand New instance of Object Gets Created
  const notes = new Notes(); //news up Notes()
  notes.getNotes(id);//calls object method
}





function orgFunction(){
const x = document.getElementById("container");
let ary = [];


 for (i = 0; i < x.length; i++)
{
  ary.push( x[i].value)
}
ary.sort();
let y = ary.length;
x.options.length = 0;

 for (i = 0; i < y; i++){
  let last = ary.pop();
  let option = document.createElement("option");
  option.text = last;
  x.add(option, y[0]);
}
}




function addCCFunction() {
  
   
  if (document.getElementById("container").value == "")//makes sure that i am selecting somthing
   {
    alert('Please select somthing.');
    return;//exists the function addCCFunction()
  }
   
  //creates Variable defined with let (let variables can be reassigned)
  let cc_body = document.getElementById("cc-body").value;//gets cc text bar txt
 //calls function
  cc_body = editBody(cc_body);  //now I'm going to edit the body
   
  
  const x = document.getElementById("container").selectedIndex;//gets the selected item num
   
  
  const y = document.getElementById("container").options;//gets options
  //creates Variable defined with let (let variables can be reassigned)
  let id = y[x].id; //gets selected option by index
  //A Brand New instance of Object Gets Created
  
  const notes = new Notes(); //news up Notes()
  notes.createNote(cc_body, id); //calls object method
   
  document.getElementById("cc-body").value = "";
  
  //A Brand New instance of Object Gets Created
  const speek = new Speek("CC added!");// just says the text
  speek.render(); //calls object method
}

const subjectButton = document.querySelector('#subjectButton');//stuff im going to use in subjectButton.onclick
const btnRemove = document.querySelector('#btnRemove');
const subject_body = document.querySelector('#subject-body');

subjectButton.onclick = (e) => {
 //creates subject

  if (subject_body.value == '')// has subject name
   {
    alert('Please enter the subject name.');
    return; //exits 
  }

  if (!document.querySelector('#cc-body').value == "") // reminder to add cc
   {
    alert('Remember to add the CC.');
  }

  const subjects = new SubjectsAda();// news up SubjectsAda()
 
  subjects.createSubject(document.getElementById("subject-body").value); //calls object method

  document.getElementById("subject-body").value = "";//clears subject-body

  const speek = new Speek("Subject Created!");
  speek.render();//calls object method
 // subjects.getSubjects();
};

   
btnRemove.onclick = (e) => {

  const selector = document.getElementById('container'); //gets contaner
  if (selector.selectedIndex == -1) //is selected
  {
    alert('Please select somthing.');
    return;//exit
  }

  const id = selector[selector.selectedIndex].id; //gets selected id
  
  //A Brand New instance of Object Gets Created
  const subjects = new SubjectsAda();//news up
  //calls object method
  subjects.deleteSubject(id);//delets by id
  
  //A Brand New instance of Object Gets Created
  const speek = new Speek("Subject Deleted!");
  //calls object method
  speek.render();// speeks
};

//upddats the edit text
function onContainerClick() {
   
  
  const x = document.getElementById("container").selectedIndex;
   
  
  const y = document.getElementById("container").options;
  let subject_body = y[x].text;
   
  document.getElementById("edit-subject-body").value = subject_body;
}


function EditSubjectFunction() {
  
   
  
  const selector = document.getElementById("container");
  if (selector.value == "") {
    alert('Please select somthing.');
    return;
  }
  
  const id = selector[selector.selectedIndex].id;
   
  
  const y = document.getElementById("edit-subject-body").value;
  
  //A Brand New instance of Object Gets Created
  const subjects = new SubjectsAda();
  if (y == "") {
    alert('Please enter somthing.');
    return;
  }
  subjects.updateSubject(y, id); //calls object method
   
  document.getElementById("edit-subject-body").value = "";
  
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