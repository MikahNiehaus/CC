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
      body: JSON.stringify(data)
    }
    fetch(this.baseUrl, configObj)
      .then(res => res.json())
      .then((resObj) => this.sanitizeAndAddGranola(resObj.data))
  }

  getNotes(id) {
    let i = 0;
    let resolt = "";
    fetch(this.baseUrl).then((response) => {
      response.json().then((data) => {
        console.log(data);

        while (i < data.length) {
          if (data[i]["subject_id"] == id) {
            resolt += data[i]["body"].toString() + "\n\n";
          }
          i += 1;
        }
        copyStringToClipboard(resolt);
        window.open('https://www.office.com/launch/word?auth=1', '_blank');
      }).catch((err) => {
        console.log(err);
      })
    });

  }


}


// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand