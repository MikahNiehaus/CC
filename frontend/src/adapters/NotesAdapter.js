// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

class NotesAdapter {
  constructor() {
    // The constructor method is a special method for creating and initializing an object created with a class. 
    // There can only be one special method with the name "constructor" in a class. 
    // A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.
    this.baseUrl = 'http://localhost:3000/api/v1/notes'
  }

  createNote(input, id) {
    let data = ({
      note: {
        body: input,
        subject_id: id,
      }
    })
    let configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accepts": "application/json" },
         // 'Content-Type': 'application/x-www-form-urlencoded',
      body: JSON.stringify(data)
    }
    fetch(this.baseUrl, configObj)
    //it then goes to routes
      .then(res => res.json())
      .then((resObj) => this.sanitizeAndAddGranola(resObj.data))
  }

  getNotes(id) {
   // let i = 0;
    let resolt = "";
    // requests *GET, POST, PUT, DELETE, etc. 
    fetch(this.baseUrl).then((response) => {
      //it then goes to routes
      response.json().then((data) => {
        console.log(data);
        data.forEach((item) => addNoteFunction(item, id));
      
        copyStringToClipboard(resolt);
        window.open('https://www.office.com/launch/word?auth=1', '_blank');
      }).catch((err) => {
        console.log(err);
      })
    });

  }


}
function addNoteFunction(item, id) {
  const note = new Note(item);
  let element = note.render();
  if (element["subject_id"] == id) {
    resolt += element["body"].toString() + "\n\n";
  }
 
}
class Note {
  // A class is a type of function, but instead of using the keyword function to initiate it,
  // we use the keyword class, and the properties are assigned inside a constructor() method.
  constructor(note){
    this.id = note.id;
    this.subject_id = note.subject_id;
    this.body = note.body;
  //   The constructor method is special, it is where you initialize properties, 
  //   it is called automatically when a class is initiated, and it has to have the exact name "constructor", 
  //   in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.
   }
   // Adding a method to the constructor
  render(){
    console.log("note has been created")
    let element = {
      note: {
        body: this.body,
        id: this.id,
        subject_id: this.subject_id
      }
    }
    return (element)
  }


}
// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand