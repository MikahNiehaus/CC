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
         // 'Content-Type': 'application/x-www-form-urlencoded', Headers represents a set of request/response HTTP headers. It allows for case-insensitive lookup of header by name, as well as merging multiple values of a single header.
      body: JSON.stringify(data)
    }
    //it then goes to routes
    fetch(this.baseUrl, configObj)
      .then(res => res.json())
      .then((resObj) => this.sanitizeAndAddGranola(resObj.data))
  }
  
  getNotes(id) {
    // requests *GET, POST, PUT, DELETE, etc. 
    //it then goes to routes
    fetch(this.baseUrl).then((response) => {
      response.json().then((data) => {
        console.log(data);
        //instance of object
        const cc = new CC("");
        //The forEach() method executes a provided function once for each array element
        data.forEach((item) => addNoteFunction(item, id, cc));
        let output = cc.render();
        const copyStringToClipboard = new CopyStringToClipboard(output);
        copyStringToClipboard.render();
        window.open('https://www.office.com/launch/word?auth=1', '_blank');
      }).catch((err) => {
        console.log(err);
      })
    });

  }


}

class CC {
  // A class is a type of function, but instead of using the keyword function to initiate it,
  // we use the keyword class, and the properties are assigned inside a constructor() method.
   constructor(body){
     // this. refers to the global object whether in strict mode or not.
    //instance that the method is called on/ refers to object
    this.body = body;
    this.output = "";
  //   The constructor method is special, it is where you initialize properties, 
  //   it is called automatically when a class is initiated, and it has to have the exact name "constructor", 
  //   in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.
   }
   addCC(body){
     // this. refers to the global object whether in strict mode or not.
   this.output += body + "\n\n";
   }
   render(){
   // this. refers to the global object whether in strict mode or not.
    return this.output;
   }
}

function addNoteFunction(item, id, cc) {
  let resolt = "";
  const note = new Note(item);
  let element = note.render();
  let subject_id = element["note"]["subject_id"];
  let body = element["note"]["body"];
  if (subject_id == id) {
    resolt += body;
  cc.addCC(resolt);
  
  }
 
}

class Note {
  // A class is a type of function, but instead of using the keyword function to initiate it,
  // we use the keyword class, and the properties are assigned inside a constructor() method.
  constructor(note){
    // this. refers to the global object whether in strict mode or not.
    //instance that the method is called on/ refers to object
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
        // this. refers to the global object whether in strict mode or not.
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